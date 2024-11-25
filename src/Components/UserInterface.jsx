import React, { useEffect, useState, useContext } from "react";
import AppNavBar from "./Elements/Header";

import { useNavigate } from "react-router-dom";

import './Styles/clickableLinkButton.css'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Container } from "@mui/material";
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';

import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import axios from "axios";
import LoadingPage from "./LoadingPage";

import { AuthContext } from "./AuthContext";
import JobSearchParameterSettingsPage2 from "./UserComponents/JobSearchParameterSettings2";
import GlobalJobSearchPage from "./UserComponents/GlobalJobSearchPage";
import CurrentMatchingJobsPage2 from "./UserComponents/CurrentMatchingJobsPage2";


function UserInterface() {
    const navigate = useNavigate();
    const { token, loading: authLoading, email } = useContext(AuthContext);

    const [activeComponent, setActiveComponent] = useState(null);

    const [jobData , setJobData] = useState([]);

    const [companyOptions, setCompanyOptions] = useState([])

    const [loading, setLoading] = useState(true); 

    async function getCompanyOptions() {
        try {
            var options = {
                method: 'GET',
                    url: `${import.meta.env.VITE_API_BASE_URL}/companyListNames`,
                };
            const companyOptionsData = await axios.request(options);
            companyOptionsData.data.sort();
            return companyOptionsData.data
        } catch (err) {
            console.error("Unable to get company data")
            console.error(err)
        }
    }

    async function getJobData() {
        try {
                let options = {
                method: 'GET',
                    url: `${import.meta.env.VITE_API_BASE_URL}/getAllCurrentJobData`,
                };
                try {
                    let jobData = await axios.request(options);
                    return jobData.data.jobDataList;
                } catch(err) {
                    if (err.response.data == "The Job Data object is empty") {
                        navigate("/jobSearchParameters")
                    } else {
                        throw Error(err);
                    }
                }
                
        } catch(err) {
            console.log(err);
        }
    }

    const getActiveComponent = () => {
        if (activeComponent === "JobSearchParams") {
            return <JobSearchParameterSettingsPage2 incomingCompanyOptions={companyOptions} />;
        }
        if (activeComponent === "GlobalJobSearch") {
            return <GlobalJobSearchPage incomingJobData={jobData} />;
        }
        if (activeComponent === "CurrentMatchingJobPage") {
            return <CurrentMatchingJobsPage2 jobData={jobData} />;
        }
        return <JobSearchParameterSettingsPage2 incomingCompanyOptions={companyOptions} />;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [jobDataFetched, companyOptionsFetched] = await Promise.all([
                    getJobData(),
                    getCompanyOptions(),
                ]);
                setJobData(jobDataFetched);
                setCompanyOptions(companyOptionsFetched);
            } catch (err) {
                navigate("/");
            } finally {
                setLoading(false); // Ensures loading is set to false after data fetching
            }
        };
        fetchData();
    }, [])

    useEffect(() => {
    }, [companyOptions]);

    if (loading || authLoading) {
        return <LoadingPage />;
    }

    if (!token) {
        navigate("/");
        return null;
    }

    return (<Box id="root">
                <Box id="page-header-head" style={{fontFamily: "open sans,helvetica,arial,sans-serif",  zIndex: 0, background:"#F5F5F5", minHeight: "100vh", position: "relative"}}>
                    <Container id="page-header" sx={{ color: "white", width: "100%", margin: "0", minWidth:"100%", maxHeight: "30vh", boxShadow: 1, padding: "0", backgroundColor: "#0acdff"}}>
                    <AppNavBar setActiveComponent={setActiveComponent} />
                    </Container>
                    <Container id="jobs-container" sx={{minWidth: "90vw"}}>
                        {getActiveComponent()}
                    </Container>
                </ Box> 
            </ Box>)

}

export default UserInterface

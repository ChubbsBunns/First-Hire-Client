import React, { useEffect, useState, useContext } from "react";
import AppNavBar from "./Elements/Header";

import { useNavigate } from "react-router-dom";

import '../Components/Styles/clickableLinkButton.css'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Container } from "@mui/material";
import { buttonStyles } from './Styles/BarButtonStyle';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';

import SearchIcon from '@mui/icons-material/Search';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import axios from "axios";
import LoadingPage from "./LoadingPage";

import { AuthContext } from "./AuthContext";

function CurrentMatchingJobsPage2() {
    const navigate = useNavigate();

    const { token, loading, email } = useContext(AuthContext);
    const columns = [
        { field: 'jobName', headerName: 'Job Title', flex: 2 },
        { field: 'companyName', headerName: 'Company', flex: 1 },
        { field: 'companyCareerPageLink', headerName: 'Go To Job Portal', flex: 1, renderCell: (params) => (
            <a href={params.row.companyCareerPageLink} target="_blank" rel="noopener noreferrer" className="clickable-link-button">
              {params.row.companyName}'s page
            </a>
          ),},
      ];

    const [searchTerm, setSearchTerm] = useState('');
    const [latestJobDate, setLatestJobDate] = useState("");
    const [userMatchingJobData, setUserMatchingJobData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    async function getLatestJobSearchQueryDate() {
        var options = {
        method: 'GET',
            url: `${import.meta.env.VITE_API_BASE_URL}/getLatestJobSearchQueryDate`,
        /* headers: {authorization: `Bearer ${accessToken}`} */
        };

        const latestDate = await axios.request(options);
        return latestDate.data.toString();
    }

    async function getUserMatchingJobData() {
      try {
        console.log("Email is " + email)
          var options = {
          method: 'GET',
              url: `${import.meta.env.VITE_API_BASE_URL}/user/getUserMatchingJobs?email=${email}`,
          };
          try {
              console.log("attempting a request")
              const jobData = await axios.request(options);
              console.log("Job data is ")
              console.log(jobData) 
              return jobData.data.newJobSearch
          } catch(err) {
            console.log("The error is")
            console.log(err)
            if (err.response.data != undefined) {
              if (err.response.data == "The Job Data object is empty") {
                console.log("The job data object is indeed empty")
                navigate("/jobSearchParameters")
              }
              else {
                console.log("The uncaught error is ")
                console.log(err.message)
                throw Error(err);
              }
            }
            else {
              console.log("The uncaught error is ")
              console.log(err.message)
              throw Error(err);
            }
          }
      } catch(err) {
          console.error(err);
      }
    }

    const filterData = (data, searchTerm) => {
        if (!searchTerm) {
          return data;
        }
      
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        return data.filter((row) => {
          const jobNameMatch = row.jobName.toLowerCase().includes(lowercaseSearchTerm);
          const companyNameMatch = row.companyName.toLowerCase().includes(lowercaseSearchTerm);
          const companyLinkMatch = row.companyCareerPageLink.toLowerCase().includes(lowercaseSearchTerm);
      
          return jobNameMatch || companyNameMatch || companyLinkMatch;
        });
      };
    
      async function getUserMetaDataAndUpdateVariables() {
        try {
            var userMatchingJobData = await getUserMatchingJobData();
            var latestDate = await getLatestJobSearchQueryDate();
            setUserMatchingJobData(userMatchingJobData);
            setFilteredData(userMatchingJobData)
            setLatestJobDate(latestDate)
            setLoaded(true)
        } catch (e) {
            console.log(e)
          }
      }

    useEffect(() => {
        {
            getUserMetaDataAndUpdateVariables();
        }
    },[])

    useEffect(() => {
        const filtered = filterData(userMatchingJobData, searchTerm);
        setFilteredData(filtered);
    }, [searchTerm, userMatchingJobData]);

    
    
    if (loading) {
        console.log("Loading")
        return <LoadingPage/>;
      }
    else {
      if (token) {
        return <Box id="root">
        <Box id="page-header-head" style={{fontFamily: "open sans,helvetica,arial,sans-serif",  zIndex: 0, background:"#d3d3d3", minHeight: "100vh", position: "relative"}}>
            <Container id="page-header" sx={{  backgroundColor: "#/* c1d5e3 */", color: "white", width: "100%", margin: "0", minWidth:"100%", maxHeight: "30vh", boxShadow: 1}}>
            <AppNavBar/>
            </Container>
            <Container id ="hero-background" sx={{ backgroundColor: "#0c4551", width: "100%", top: "0", height: "380px", minWidth:"100%", zIndex: -1, position: "absolute", boxShadow: 1}}></Container>
            <Container id="jobs-container" sx={{maxWidth: "1140px", marginLeft: "auto", marginRight: "auto", pl: "15px", pr: "15px"}}>
                <Box id="jobs-container-header" sx={{marginTop: "40px"}}>
                    <Box id="jobs-container-header-title" sx={{color: "#E6F8F3", fontSize: "32px", fontWeight: "550",  fontFamily: "cambria,arial", mb: ".4rem", lineHeight: "1.5"}}>Jobs Matching Your Preferences &nbsp; <PersonSearchIcon fontSize="large"/></Box>
                    <Box id="jobs-container-header-description"  sx={{ color: "#ddf7e9", fontSize: "17px" }}>Here are the jobs today that match your parameters</Box>
                    <Box id="jobs-container-header-description"  sx={{ color: "#ddf7e9", fontSize: "17px" }}>These jobs were last updated on {latestJobDate}</Box>
                </Box>
                <Card sx={{ minHeight: "500px",boxShadow: "2", borderRadius: "20px", p: "10px", backgroundColor: "#f9f9f9", mt: "15px", display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <Box sx={{flexDirection: "row", mb: "2vh", alignContent: "center", width: "30vw" }}>
                        <TextField  sx={{ color: "black",  backgroundColor: "white",  width: "100%", }} id="outlined-basic" label="Search your filtered jobs by job title or company" value ={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
                    </Box>
                    <Box sx={{display: "flex",  justifyContent: "center", flexDirection: "column"}}>
                    <div style={{ height: "55vh",  width: "60vw" }}>
                        <DataGrid sx={{ ".MuiTablePagination-selectLabel": {"marginTop": "1em", "marginBottom": "1em"}, 
                                        ".MuiTablePagination-displayedRows": {"marginTop": "1em", "marginBottom": "1em"}}}
                        rows={filteredData}
                        columns={columns}
                        />
                    </div>
                    </Box>
                </Card>
                </Container>
        </ Box> 
        </ Box>
      } else {
        console.log("Token not found")
        navigate("/")
      }

    }

}

export default CurrentMatchingJobsPage2
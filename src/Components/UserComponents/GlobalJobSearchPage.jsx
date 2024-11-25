import React, { useEffect, useState, useContext } from "react";
import Box from '@mui/material/Box';
import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import Card from '@mui/material/Card';

import SearchIcon from '@mui/icons-material/Search';

import { AuthContext } from '../AuthContext';

import { useNavigate } from "react-router-dom";
import LoadingPage from "../LoadingPage";

function GlobalJobSearchPage({ incomingJobData }) {
    const navigate = useNavigate();
    const columns = [
        { field: 'jobName', headerName: 'Job Title', flex: 2 },
        { field: 'companyName', headerName: 'Company', flex: 1 },
        { field: 'companyCareerPageLink', headerName: 'Go To Job Portal', flex: 1, renderCell: (params) => (
            <a href={params.row.companyCareerPageLink} target="_blank" rel="noopener noreferrer" className="clickable-link-button text-custom-teal">
              {params.row.companyName}'s page
            </a>
          ),},
      ];
    
      const { token, loading, email } = useContext(AuthContext);

            const [searchTerm, setSearchTerm] = useState('');
            const [jobData , setJobData] = useState([]);
            const [filteredData, setFilteredData] = useState([]);        

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

            useEffect(() => {
                const filteredData = filterData(jobData, searchTerm);
                setFilteredData(filteredData)
            }, [searchTerm])

            useEffect(() => {
                setJobData(incomingJobData)
                setFilteredData(incomingJobData)
            }, [incomingJobData])

            
            
    if (loading || filteredData.length == 0) {
        console.log("Loading or data hasnt loaded")
        return <LoadingPage/>
    }
    else {
        if (token) {
            return (<>
                <Container id="jobs-container" sx={{maxWidth: "1140px", marginLeft: "auto", marginRight: "auto", pl: "15px", pr: "15px"}}>
                    <Box id="jobs-container-header" sx={{marginTop: "40px"}}>
                        <Box id="jobs-container-header-title" sx={{color: "#E6F8F3", fontSize: "32px", fontWeight: "550",  fontFamily: "cambria,arial", mb: ".4rem", lineHeight: "1.5"}}>Search All Companies &nbsp;<SearchIcon fontSize="large"/></Box>
                        <Box id="jobs-container-header-description"  sx={{ color: "#052f38", fontSize: "17px"  }}>Here are the jobs today that match your parameters</Box>
                    </Box>
                    <Card sx={{ minHeight: "500px",boxShadow: "2", borderRadius: "20px", p: "10px", backgroundColor: "#f9f9f9", mt: "15px", display: "flex", alignItems: "center", flexDirection: "column"}}>
                        <Box sx={{flexDirection: "row", mb: "2vh", alignContent: "center", width: "30vw" }}>
                            <TextField  sx={{ color: "#052f38",  backgroundColor: "white",  width: "100%", }} id="outlined-basic" label="Search your filtered jobs by job title or company" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
                        </Box>
                        <Box sx={{display: "flex",  justifyContent: "center", flexDirection: "column"}}>
                        <div style={{ height: "55vh",  width: "60vw" }}>
                            <DataGrid sx={{ color: "#052f38", ".MuiTablePagination-selectLabel": {"marginTop": "1em", "marginBottom": "1em"}, 
                                            ".MuiTablePagination-displayedRows": {"marginTop": "1em", "marginBottom": "1em"}, '& .MuiDataGrid-columnHeader': {
                                  backgroundColor: '#0acdff', // Set your desired background color
                                  color: '#fff', // Set your desired text color
                                },}}
                            rows={filteredData}
                            columns={columns}
                            initialState={{
                                pagination: {
                                  paginationModel: {
                                    pageSize: 5,
                                  },
                                },
                              }}
                              pageSizeOptions={[5]}
                              checkboxSelection
                              disableRowSelectionOnClick
                            />
                        </div>
                        </Box>
                    </Card>
                </Container>
                   </>)
        } else {
            console.log("Token not found")
            navigate("/")
        }
    }

}

export default GlobalJobSearchPage;
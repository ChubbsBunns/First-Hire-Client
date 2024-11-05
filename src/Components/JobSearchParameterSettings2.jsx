//MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel, IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';

//Auth
import { AuthContext } from './AuthContext';

//React
import React, {useEffect, useState, useContext} from 'react';
import { Link, useNavigate } from "react-router-dom";

//Custom Styles
import { buttonStyles } from './Styles/BarButtonStyle';

//Other imports
import axios from "axios";

import ContactMailIcon from '@mui/icons-material/ContactMail';

import AppNavBar from "./Elements/Header";
import LoadingPage from './LoadingPage';

function JobSearchParameterSettingsPage2() {

    const { token, loading, email } = useContext(AuthContext);

    const navigate = useNavigate();
    //UseStates
    const [jobPhrases, setJobPhrases] = useState('');
    const [negativePhrases, setNegativePhrases] = useState('');
    const [filteredStuff, setFilteredStuff] = useState([]); 
    const [selectedCompanies, setSelectedCompanies] = useState([]);
    const [companyOptions, setCompanyOptions] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    const handleCompanySelect = (event, companyName) => {
        const isChecked = event.target.checked;
        const newSelectedCompanies = isChecked ? [...selectedCompanies, companyName] : selectedCompanies.filter((i) => i !== companyName);
        setSelectedCompanies(newSelectedCompanies);
    }

    const handleSearchChange = (searchTerm) => {
        const filteredStuff = companyOptions.filter((item) => 
            item.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredStuff(filteredStuff);
      };

      const BootstrapTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
          color: theme.palette.common.black,
        },
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: theme.palette.common.black,
        },
      }));

    async function getCompanyOptions() {

          var options = {
            method: 'GET',
                url: `${import.meta.env.VITE_API_BASE_URL}/companyListNames`,
            };

        const companyOptionsData = await axios.request(options);
        companyOptionsData.data.sort();
        setCompanyOptions(companyOptionsData.data) 
        setFilteredStuff(companyOptionsData.data);
    }


    function extractPhrasesFromString(inputString) {
        // Trim any leading or trailing whitespace from the input string
        inputString = inputString.trim();
      
        // Split the input string by commas and trim whitespace from each phrase
        const phrases = inputString.split(',').map(phrase => phrase.trim());
      
        // Filter out any empty strings that might result from extra commas
        return phrases.filter(phrase => phrase.length > 0);
      }

    useEffect(() => {
        const fetchData = (async () => {
            try {
                
                if (email != null || undefined) {
                    var options = {
                    method: 'GET',
                        url: `${import.meta.env.VITE_API_BASE_URL}/user/getUser?email=${email}`,
                    };
                    const response = await axios.request(options)
                    let keyPhrases = response.data.keywordSettings.jobPhrases;
                    let selectedCompanies = response.data.keywordSettings.selectedCompanies;
                    if (keyPhrases == undefined || keyPhrases.length == 0 || selectedCompanies == undefined || selectedCompanies.length == 0) {
                        // job search parameters not defined yet, redirect to job search parameters page
                        navigate("/jobSearchParameters")
                    }
                    await getCompanyOptions();
                } else {
                    console.log("Email is undefined")
                }
            } catch (err) {
                console.error(err);
            }
        });
            //Get User Email
            fetchData();        
    }, [email])

    useEffect(() => {
        const filteredStuff = companyOptions.filter((companyName) => 
            companyName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredStuff(filteredStuff)
    },[searchTerm])


    //CSS Settings
    const isSmallScreen = useMediaQuery('(max-width:768px)');
    const companyOptionSX = {
        display: 'flex',
        flexGrow: 1,
        ml: '2%',
        width: '50%',
    }

    const companyOptionHolder = {
        display: 'grid',
        gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr",
        width: '100%',
        maxHeight: "50vh",
        overflow: "auto"
    }

    if (loading) {
        console.log("Return loading page")
        return <LoadingPage/>
    } else {
        if (/* token */ true) {
            return (
                <Box>
                    <Box id="page-header-head" style={{fontFamily: "open sans,helvetica,arial,sans-serif",  zIndex: 0, background:"#d3d3d3", minHeight: "100vh", position: "relative"}}>
                        <Container id="page-header-background" sx={{  backgroundColor: "#/* c1d5e3 */", color: "white", width: "100%", margin: "0", minWidth:"100%", maxHeight: "10vh", boxShadow: 1}}>
                            <AppNavBar/>
                        </Container>
                        <Container id ="hero-background" sx={{ backgroundColor: "#0c4551", width: "100%", top: "0", height: "380px", minWidth:"100%", zIndex: -1, position: "absolute", boxShadow: 1}}></Container>
                        <Container id="jobs-container" sx={{maxWidth: "1140px", marginLeft: "auto", marginRight: "auto", pl: "15px", pr: "15px"}}>
                        <Box id="jobs-container-header" sx={{marginTop: "40px"}}>
                        <Box id="jobs-container-header-title" sx={{color: "#E6F8F3", fontSize: "32px", fontWeight: "550",  fontFamily: "cambria,arial", mb: ".4rem", lineHeight: "1.5"}}>Set Your Job Parameters Here &nbsp; <ContactMailIcon fontSize="large"/></Box>
                        <Box id="jobs-container-header-description"  sx={{ color: "#ddf7e9", fontSize: "17px" }}>The jobs emailed to you will depend on the parameters set here. Please select the phrases you wish your job titles to include, alongside the companies you wish to keep track of</Box>
                        <Card sx={{ minHeight: "500px",boxShadow: "2", borderRadius: "20px", p: "10px", backgroundColor: "#f9f9f9", mt: "15px", display: "flex", alignItems: "center", flexDirection: "column"}}>
                        <FormControl
                            sx={{
                                    display: { width: '1000px', maxWidth: '80%', display: 'flex', flexDirection: "column",  margin: "auto", padding: "auto", maxHeight: "90%" },
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}>
                            <Box>
                                <FormLabel>Enter Job Phrases to filter for (seperated by commas) &nbsp;</FormLabel>
                                <BootstrapTooltip title="New Jobs (from the companies you select) that contain these phrases will be emailed to you within 24 hours of being posted">
                                    <InfoIcon/>
                                </BootstrapTooltip>
                            </Box>
        
                            <TextField
                                required
                                variant="outlined"
                                label="e.g. Intern, internship, Software, Business Analyst, Engineer, etc..."
                                value={jobPhrases} // Set the value from state
                                onChange={(event) => setJobPhrases(event.target.value)}
                            />
                            <br/>
        
                            <Box>
                                <FormLabel>Enter *NEGATIVE* Job Phrases to filter for (seperated by commas) &nbsp;</FormLabel>
                                <BootstrapTooltip title="Jobs that DO include these phrases will NOT be emailed to you">
                                    <InfoIcon/>
                                </BootstrapTooltip>
                            </Box>
        
                            <TextField
                                label="e.g. Senior, President, Assistant, etc..."
                                variant="outlined"
                                size="small"
                                value={negativePhrases} // Set the value from state
                                onChange={(event) => setNegativePhrases(event.target.value)}
                            />
                            <div>
                            <br/>
        
                            <Box>
                                <FormLabel>Select the Companies whose jobs you wish to keep track of &nbsp;</FormLabel>
                                <BootstrapTooltip title="The job notifications you receive will only come from the companies selected here">
                                    <InfoIcon/>
                                </BootstrapTooltip>
                            </Box>
        
                            <TextField
                                label="Search Company"
                                variant="outlined"
                                onChange={(event) => setSearchTerm(event.target.value)}
                            />
                            </div>
                            <Box sx={companyOptionHolder}>
                            {(
                                    (companyOptions.map)((company) => (
                                    <FormControlLabel
                                        key ={company}
                                        control={<Checkbox onChange={(event) => handleCompanySelect(event, company)}/>}
                                        label={company}
                                        sx={{ display: filteredStuff.includes(company) ? 'block' : 'none' }}
                                    />
                                    ))
                                )} { filteredStuff.length === 0 ? (
                                    (<div>No Companies Match That Description</div>)
                                ) : (<></>)
                            }
                            </Box>
        
                            <br/>
                            <Button onClick={ async (e) => {
                            let keyPhrases = extractPhrasesFromString(jobPhrases)
                            let extractedNegativePhrases = extractPhrasesFromString(negativePhrases)
                            const formData = {
                                jobPhrases: keyPhrases,
                                negativePhrases: extractedNegativePhrases,
                                selectedCompanies: selectedCompanies,
                                userEmail: email
                                //userEmail
                            };
                            try {
                                if (!jobPhrases || selectedCompanies.length === 0) {
                                    throw new Error(
                                        "Job Phrases must have an input, and you need to select at least one company"
                                    )
                                }
                                console.log(formData)
                                var options = {
                                method: 'POST',
                                    url: `${import.meta.env.VITE_API_BASE_URL}/user/updateJobParameters`,
                                data: formData
                                //How do i insert formData
                                };
                                const response = await axios.request(options);
                                navigate("/currentMatchingJobsData")
                            } catch(error) {
                                console.error(error)
                            }
                            // Use formData here, e.g., send it to your backend using fetch or axios
                            }}>
                            Submit
                            </Button>
                            
                        </FormControl>
                        </Card>
                    </Box>
                        </Container>
        
                    </Box>
                </Box>
            )            
        } else {
            console.log("Token not found")
            navigate("/")
        }
    }


}

export default JobSearchParameterSettingsPage2;
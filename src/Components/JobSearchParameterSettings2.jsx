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
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

//React
import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

//Custom Styles
import { buttonStyles } from './Styles/BarButtonStyle';

//Other imports
import axios from "axios";

import SearchIcon from '@mui/icons-material/Search';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import AppNavBar from './Header';

function JobSearchParameterSettingsPage2() {

    const navigate = useNavigate();
    //UseStates
    const [userEmail, setUserEmail] = useState();
    const [jobPhrases, setJobPhrases] = useState('');
    const [negativePhrases, setNegativePhrases] = useState('');
    const [filteredStuff, setFilteredStuff] = useState([]); 
    const [selectedCompanies, setSelectedCompanies] = useState([]);
    const [companyOptions, setCompanyOptions] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        getAccessTokenSilently,
      } = useAuth0();

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

      async function getUserData() {
        try {
            const token = await getAccessTokenSilently({
                audience: `https://${import.meta.env.VITE_AUTH_DOMAIN_URL}/api/v2/`,
                scope: "read:current_user",
            });
            setUserEmail(user.email)
        }
        catch(error) {
            console.log(error)
        }
    }

    async function getCompanyOptions() {
        const accessToken = await getAccessTokenSilently({
            authorizationParams: {
              audience: `https://${import.meta.env.VITE_AUTH_DOMAIN_URL}/api/v2/`,
            },
          });

          var options = {
            method: 'GET',
                url: `${import.meta.env.VITE_API_BASE_URL}/companyListNames`,
            headers: {authorization: `Bearer ${accessToken}`,
            audience: `https://first-hire-api.com`}
            };

        const companyOptionsData = await axios.request(options);
        companyOptionsData.data.sort();
        console.log(companyOptionsData.data);
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
                if (isAuthenticated) {
                    await getUserData();
                    const accessToken = await getAccessTokenSilently({
                        authorizationParams: {
                          audience: `https://${import.meta.env.VITE_AUTH_DOMAIN_URL}/api/v2/`,
                        },
                      });
                    
                    var options = {
                    method: 'GET',
                        url: `${import.meta.env.VITE_API_BASE_URL}/user/getUser?email=${user.email}`,
                    headers: {authorization: `Bearer ${accessToken}`,
                    audience: `https://first-hire-api.com`}
                    };
                    const response = await axios.request(options)
                    let keyPhrases = response.data.keywordSettings.jobPhrases;
                    let selectedCompanies = response.data.keywordSettings.selectedCompanies;
                    if (keyPhrases == undefined || keyPhrases.length == 0 || selectedCompanies == undefined || selectedCompanies.length == 0) {
                        // job search parameters not defined yet, redirect to job search parameters page
                        navigate("/jobSearchParameters")
                    }
                    await getCompanyOptions();
                }
            } catch (err) {
                console.error(err);
            }
        });
        fetchData();
    }, [isLoading])

    useEffect(() => {
        const getUserMetaData = async () => {
            try {
                const accessToken = await getAccessTokenSilently({
                    audience: `${import.meta.env.VITE_AUTH_DOMAIN_URL}/api/v2/`,
                    scope: "read:current_user",
                })
                setUserEmail(user.email)
                
            } catch(err) {
                console.log(err);
            }
        }
        if (isLoading ==false) {
            //Get User Email
            getUserMetaData();
        }
    }, [isLoading])

    useEffect(() => {
        if (isAuthenticated) {
            const filteredStuff = companyOptions.filter((companyName) => 
                companyName.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredStuff(filteredStuff)
        }
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
                        userEmail: user.email
                        //userEmail
                    };
                    try {
                        if (!jobPhrases || selectedCompanies.length === 0) {
                            throw new Error(
                                "Job Phrases must have an input, and you need to select at least one company"
                            )
                        }
                        console.log(formData)

                        const accessToken = await getAccessTokenSilently({
                            authorizationParams: {
                              audience: `https://${import.meta.env.VITE_AUTH_DOMAIN_URL}/api/v2/`,
                            },
                          });
                        var options = {
                        method: 'POST',
                            url: `${import.meta.env.VITE_API_BASE_URL}/user/updateJobParameters`,
                        headers: {authorization: `Bearer ${accessToken}`,
                        audience: `https://first-hire-api.com`},
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
}

export default JobSearchParameterSettingsPage2;
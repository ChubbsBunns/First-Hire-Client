import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { buttonStyles } from './Styles/BarButtonStyle';
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import { useNavigate } from 'react-router-dom';

import LogoutButton from './LogoutButton';
import firstHireSecondaryLogo from '../assets/firstHireLogoSecondary.png'

function AppNavBar() {
    const navigate = useNavigate();
    return (<Box id ="navigation-bar" sx={{ maxWidth: "1375px",display: "flex", flexDirection: "row", height: "100%", margin: "0 auto", gap: "16px"}}>
                <Box sx={{display: "flex", flexWrap: "wrap", alignContent: "flex-start", flexGrow: 2,p: "auto", m:"auto"}}>
                    <img style={{maxHeight: "5vh", maxWidth: "3vw"}} alt="logo" src={firstHireSecondaryLogo}></img> <Box sx={{display: "flex", alignItems: "center", justifyContent: "center",}}>&nbsp; First Hire</Box>
                </Box>
                <Box>
                    <Button onClick={() => navigate("/jobSearchPage")} sx={buttonStyles}><SearchIcon/>&nbsp; Search All Jobs</Button></Box>
                <Box>
                    <Button onClick={() => navigate("/jobSearchParameters")} sx={buttonStyles}><ContactMailIcon/>&nbsp; Set Job Parameters</Button>
                </Box>
                <Box>
                    <Button onClick={() => navigate("/currentMatchingJobsData")} sx={buttonStyles}><PersonSearchIcon/>&nbsp; Jobs For You</Button>
                </Box>
                <Box>
                    <LogoutButton/>
                </Box>
            </Box>)
}

export default AppNavBar;
import React from "react";
import Box from '@mui/material/Box';
import { Container } from "@mui/material";
import AppNavBar from "./Elements/Header";
import CircularProgress from '@mui/material/CircularProgress';
function LoadingPage() {
    return <>
    <Box id="root">
        <Box id="page-header-head" style={{fontFamily: "open sans,helvetica,arial,sans-serif",  zIndex: 0, background:"#d3d3d3", minHeight: "100vh", position: "relative"}}>
            <Container id="page-header" sx={{  backgroundColor: "#/* c1d5e3 */", color: "white", width: "100%", margin: "0", minWidth:"100%", maxHeight: "30vh", boxShadow: 1}}>
                <AppNavBar/>
            </Container>
            <Container id ="hero-background" sx={{ backgroundColor: "#0c4551", width: "100%", top: "0", height: "380px", minWidth:"100%", zIndex: -1, position: "absolute", boxShadow: 1}}></Container>
            <Box className="loadingLogoHolder" sx={{position: "absolute", height:"80%", width: "100%",  display: 'flex', alignItems: "center", justifyContent: "center"}}>
                <CircularProgress sx={{scale:"4"}}/>
            </Box>
        </ Box>
    </ Box>

    </>
}

export default LoadingPage;
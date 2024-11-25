import React from "react";
import Box from '@mui/material/Box';
import { Container } from "@mui/material";
import AppNavBar from "./Elements/Header";
import CircularProgress from '@mui/material/CircularProgress';
function LoadingPage() {
    return <>
            <Box className="loadingLogoHolder"     sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999, // Ensure it appears above other content
    }}>
                <CircularProgress sx={{scale:"4"}}/>
            </Box>
    </>
}

export default LoadingPage;
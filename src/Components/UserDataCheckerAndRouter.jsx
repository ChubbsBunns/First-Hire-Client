import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LoadingPage from "./LoadingPage";

//Auth
import { AuthContext } from './AuthContext';

function CheckUserDataAndRoute() {
      const navigate = useNavigate();

      const [userData, setUserData] = useState(null);
      const [fetchingData, setFetchingData] = useState(false);
      const { token, loading, email } = useContext(AuthContext);
      useEffect( () => {
        async function getUserData() {
          try {
          var options = {
            method: 'GET',
                url: `${import.meta.env.VITE_API_BASE_URL}/user/getUser?email=${email}`,
            };
            
          const response = await axios.request(options)
          let keyPhrases = response.data.keywordSettings.jobPhrases;
          let selectedCompanies = response.data.keywordSettings.selectedCompanies;
          if (keyPhrases == undefined || keyPhrases.length == 0 || selectedCompanies == undefined || selectedCompanies.length == 0 || response.data=="" ) {
            // job search parameters not defined yet, redirect to job search parameters page
            navigate("/jobSearchParameters")
          } else {
            // Job search parameters defined. Redirect to current matching jobs data
            navigate("/currentMatchingJobsData")
          }
        }
        catch (error) {
          if (error.message == "Unable to find user with corresponding user with email") {
            navigate("/")
          }
        }
      }
      if (!email) {
        console.log("loading...")        
      } else {
          getUserData();
      }

    },[email]
    )


    if (loading) {
      if (token == null || undefined) {
        console.log("Login token not found")
        navigate("/")
      }
      return ((
        <LoadingPage/>
      ))
    }

}

export default CheckUserDataAndRoute;

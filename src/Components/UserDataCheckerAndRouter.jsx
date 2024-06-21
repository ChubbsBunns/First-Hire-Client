import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function CheckUserDataAndRoute() {
    const navigate = useNavigate();

    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        getAccessTokenSilently,
      } = useAuth0();

      const [userData, setUserData] = useState(null);
      const [fetchingData, setFetchingData] = useState(false);

      useEffect( () => {
        async function getUserData() {
          try {
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
          console.log("response is")
          console.log(response)
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
      getUserData();
    },[isLoading]
    )

    if (!isAuthenticated) {
      return <CircularProgress />
    }

    return (isAuthenticated && (
      <div>Authenticated</div>
    ))
}

export default CheckUserDataAndRoute;

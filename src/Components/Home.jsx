import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import ResponsiveAppBar from "./AppBar";

function Home() {
  const [keywords, setKeywords] = useState();
  const [companies, setCompanies] = useState();
  const navigate = useNavigate();

  const [selectedCompanies, setSelectedCompanies] = useState([]);
  //const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const handleCheckboxChange = (event) => {
    const newSelectedCompanies = [...selectedCompanies];
    if (event.target.checked) {
      newSelectedCompanies.push(event.target.value);
    } else {
      const index = newSelectedCompanies.indexOf(event.target.value);
      newSelectedCompanies.splice(index, 1);
    }
    setSelectedCompanies(newSelectedCompanies);
  };

  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    getAccessTokenSilently,
  } = useAuth0();

  const createDailyJobObject = async (e) => {
        e.preventDefault();
        try {
          if (!keywords || selectedCompanies.length === 0) {
            throw new Error(
              "Please enter keywords and select at least one company."
            );
          }

          
    
          const response = await axios
          .post(`${import.meta.env.VITE_API_BASE_URL}/submitWebScrappingQuery`, {
              keywords,
              companies: selectedCompanies,
            })
            .then((result) => {
              console.log(result);
              navigate("/home");
            })
            .catch((err) => console.log(err));
        } catch (error) {
          console.error("Error submitting form:", error.message);
        }
  }


  const searchForFilteredJobs = async (e) => {
    e.preventDefault();
    try {
      if (!keywords || selectedCompanies.length === 0) {
        throw new Error(
          "Please enter keywords and select at least one company."
        );
      }

      const response = await axios
        .post(`${import.meta.env.VITE_API_BASE_URL}/submitFilteredQuery`, {
          keywords,
          companies: selectedCompanies,
        })
        .then((result) => {
          console.log(result);
          navigate("/home");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  
useEffect(() => {
  const getUserMetadata = async () => {
  const domain = import.meta.env.VITE_AUTH_DOMAIN_URL;  
    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: `https://${domain}/api/v2/`,
        },
      });
      var options = {
        method: 'GET',
         url: `${import.meta.env.VITE_API_BASE_URL}/api/private`,
        headers: {authorization: `Bearer ${accessToken}`,
        audience: `https://first-hire-api.com`}
      };
      axios.request(options).then(function (response) {
      }).catch(function (error) {
        console.error(error);
      });
      const { user_metadata } = await jobSearchThingy.data.json();
//      const { user_metadata } = await metadataResponse.json();

      setUserMetadata(user_metadata);
    } catch (e) {
      console.log(e.message);
    }
  };

  getUserMetadata();
}, [getAccessTokenSilently, user?.sub]);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (isAuthenticated && (
    <div>
    <ResponsiveAppBar></ResponsiveAppBar>
    <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
    {/*<div >Welcome back {user.name}</div>*/}
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <a href="http://localhost:3001/submitWebScrappingQuery">Click here to create a new query request</a>
      <div className="searchFunction ">
        <h2>Start a new query: </h2>
        <br></br>
        <form onSubmit={searchForFilteredJobs}>
          <input
            type="text"
            name="searchValues"
            placeholder="Enter job keywords!"
            className="form-control rounded-0"
            onChange={(enteredValue) => setKeywords(enteredValue.target.value)}
          ></input>
          <br></br>
          <input
            type="checkbox"
            id="Shopback"
            name="companies[]"
            value="Shopback"
            onChange={handleCheckboxChange}
            checked={selectedCompanies.includes("Shopback")}
          />{" "}
          v<label htmlFor="Shopback">Shopback</label>
          <br></br>
          <input
            type="checkbox"
            id="Cloudflare"
            name="companies[]"
            value="Cloudflare"
            onChange={handleCheckboxChange}
            checked={selectedCompanies.includes("Cloudflare")}
          />
          <label htmlFor="Cloudflare">Cloudflare</label>
          <br></br>
          <input
            type="checkbox"
            id="Visa"
            name="companies[]"
            value="Visa"
            onChange={handleCheckboxChange}
            checked={selectedCompanies.includes("Visa")}
          />
          <label htmlFor="Visa">Visa</label>
          <br></br>
          <button type="submit" className="rounded">
            Lets Scrape!
          </button>
        </form>
      </div>
      <LogoutButton></LogoutButton>
    </div>
    </div>
  ));
}

export default withAuthenticationRequired(Home, {
  onRedirecting: () => <>chicken nuggets</>
});

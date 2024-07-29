import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobSearchParameterSettingsPage2 from "./Components/JobSearchParameterSettings2";
import CheckUserDataAndRoute from "./Components/UserDataCheckerAndRouter";
import CurrentMatchingJobsPage2 from "./Components/CurrentMatchingJobsPage2";
import GlobalJobSearchPage from "./Components/GlobalJobSearchPage";
import LandingPage from "./Components/LandingPage";
import ComingSoonPage from "./Components/ComingSoon";

import Login from "./Components/Login"
import LoginPage from "./Components/LoginPage";
import RegistrationPage  from "./Components/RegistrationPage";

import { AuthProvider } from "./Components/AuthContext"

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/register" element={<RegistrationPage/>}></Route>
            <Route path="/jobSearchParameters" element={<JobSearchParameterSettingsPage2 />}></Route>
            <Route path="/checkUserSettings" element={<CheckUserDataAndRoute />}></Route>
            <Route path="/jobSearchPage" element={<GlobalJobSearchPage />}></Route>
            <Route path="/currentMatchingJobsData" element={<CurrentMatchingJobsPage2/>}></Route>
            <Route path="/comingSoon" element={<ComingSoonPage/>}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobSearchParameterSettingsPage2 from "./Components/JobSearchParameterSettings2";
import CheckUserDataAndRoute from "./Components/UserDataCheckerAndRouter";
import CurrentMatchingJobsPage2 from "./Components/CurrentMatchingJobsPage2";
import GlobalJobSearchPage from "./Components/GlobalJobSearchPage";
import LandingPage from "./Components/LandingPage";
import LoginPage from "./Components/LoginPage";
import RegistrationPage  from "./Components/RegistrationPage";

import { AuthProvider } from "./Components/AuthContext"
import LoadingPage from "./Components/LoadingPage";
import UserTest from "./Components/UserTest";

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
            
            <Route path="userStuffTest" element={<UserTest/>}></Route>
            
            <Route path="/jobSearchPage" element={<GlobalJobSearchPage />}></Route>
            <Route path="/currentMatchingJobsData" element={<CurrentMatchingJobsPage2/>}></Route>
            <Route path="/loadingTest" element={<LoadingPage/>}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobSearchParameterSettingsPage2 from "./Components/JobSearchParameterSettings2";
import CheckUserDataAndRoute from "./Components/UserDataCheckerAndRouter";
import CurrentMatchingJobsPage2 from "./Components/CurrentMatchingJobsPage2";
import GlobalJobSearchPage from "./Components/GlobalJobSearchPage";
import LandingPage from "./Components/LandingPage";
import ComingSoonPage from "./Components/ComingSoon";

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/jobSearchParameters" element={<JobSearchParameterSettingsPage2 />}></Route>
          <Route path="/checkUserSettings" element={<CheckUserDataAndRoute />}></Route>
          <Route path="/jobSearchPage" element={<GlobalJobSearchPage />}></Route>
          <Route path="/currentMatchingJobsData" element={<CurrentMatchingJobsPage2/>}></Route>
          <Route path="/comingSoon" element={<ComingSoonPage/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;

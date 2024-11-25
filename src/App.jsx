import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import RegistrationPage  from "./Components/RegistrationPage";

import { AuthProvider } from "./Components/AuthContext"
import LandingPage2 from "./Components/LandingPage2";

import './index.css';
import UserInterface from "./Components/UserInterface";

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
          <Route path="/" element={<LandingPage2/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/register" element={<RegistrationPage/>}></Route>
            <Route path="/user" element={<UserInterface/>}></Route>
{/*             <Route path="/userStuffTest" element={<UserTest/>}></Route> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App;

import React, {useContext} from "react";
import Button from '@mui/material/Button';
import { AuthContext } from "../AuthContext";
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    navigate("/")
  }

  return (
    <Button sx={{textTransform: "none", backgroundColor: "white", m: "2px"}}variant="outlined" size="medium" onClick={handleLogout }>
      Log Out
    </Button>
  );
};

export default LogoutButton;
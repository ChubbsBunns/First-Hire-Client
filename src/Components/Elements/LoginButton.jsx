import React from "react";
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  return (
      <Button onClick={() => navigate("/login")} sx={{backgroundColor: "white", textTransform: "none"}}variant="outlined" size="medium">
        Sign up/ Login
      </Button>)
};

export default LoginButton;
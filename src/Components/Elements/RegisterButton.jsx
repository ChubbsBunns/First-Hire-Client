import React from "react";
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";

const RegisterButton = () => {
  const navigate = useNavigate();
  return (
      <Button onClick={() => navigate("/register")} sx={{backgroundColor: "white", textTransform: "none"}}variant="outlined" size="medium">
        Register
      </Button>)
};

export default RegisterButton;
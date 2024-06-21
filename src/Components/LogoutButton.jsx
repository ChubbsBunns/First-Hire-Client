import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button sx={{textTransform: "none", backgroundColor: "white", m: "2px"}}variant="outlined" size="medium" onClick={() => logout({ logoutParams: { returnTo: `${import.meta.env.VITE_WEB_BASE_URL}` } }) }>
      Log Out
    </Button>
  );
};

export default LogoutButton;
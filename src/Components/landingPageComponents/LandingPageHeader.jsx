import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LoginIcon from '@mui/icons-material/Login';
import LoginButton from '../Elements/LoginButton';

import { Box } from '@mui/material';

import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';

import { buttonStyles } from '../Styles/BarButtonStyle';
import { useNavigate } from "react-router-dom";
import RegisterButton from '../Elements/RegisterButton';

function LandingPageHeader(props) {
  const { sections, title } = props;
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: "#0c4551" }}>
        <Button size="small"></Button>
        <Typography
          component="h2"
          variant="h5"
          color="white"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
{/*         <Button onClick={() => navigate("/register")} sx={buttonStyles}>Register</Button> */}
        <Box>
          <IconButton>
            <SensorOccupiedIcon sx={{color:"white"}}/>
          </IconButton>
          <RegisterButton/>
        </Box>

        <Box sx={{px:3}}>
          <IconButton>
            <LoginIcon sx={{color:"white"}}/>
          </IconButton>
          <LoginButton/>
        </Box>



        
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
            onClick={(event) => {
              console.log("In the thingy")
              event.preventDefault(); // Prevent default link behavior
              console.log(section.url.slice(1))
              const targetSection = document.getElementById(section.url.slice(1));
              console.log("In the event log")
              if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

LandingPageHeader.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default LandingPageHeader;
import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import { useEffect, useState } from "react";

import firstHireImageDarkest from '../../assets/firstHireLogos/firstHireLogoMain.png'
import firstHireImageLightest from '../../assets/firstHireLogos/firstHireLogoLightest.png'
import firstHireImageLighter from '../../assets/firstHireLogos/firstHireLogoLighter.png'

function MainFeaturedPost(props) {
  const { post } = props;

  const images = [
    { src: firstHireImageLighter},
    { src: firstHireImageLightest},
    { src: firstHireImageDarkest},
  ];
  const [imageVisibility, setImageVisibility] = useState(
    images.map(() => false)
  );

  useEffect(() => {
    images.forEach((_, index) => {
      setTimeout(() => {
        setImageVisibility((prevVisibility) =>
          prevVisibility.map((isVisible, i) => (i === index ? true : isVisible))
        );
      }, index * 250); // Delay based on index
    });
  }, []);

  return (
    <Paper
      sx={{
        position: 'relative',
        color: '#062f38',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: "#f9f9f9",
/*         backgroundColor: "#cae7ed", */
        boxShadow: 3,
        pl: "3vw", pr: "2vw"
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
          
        }}
      />
      <Grid container id="asd" sx={{width: "100%", minWidth: "100%"}}>
        <Grid item md={6} sx={{width: "100%", minWidth: "100%"}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              minWidth: "100%"
            }}
          >
            <Box>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              <strong>{post.title}</strong>
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {post.description}
              </Typography>

            </Box>

            <Box id="firstHireAnim" sx={{ width: "100%", display: "flex", justifyContent: "flex-end", position: "relative" }}>
  {images.map((image, index) => (
    <Slide key={image.src} direction="right" in={imageVisibility[index]} mountOnEnter unmountOnExit>
      <img
        style={{
          position: "absolute",
          maxHeight: "115%",
          top: 0,
          left: `${index * 4 + 15}vw`,
          right: 0,
          zIndex: index + 1,
        }}
        src={image.src}
        alt="First Hire Logo"
      />
    </Slide>
  ))}
</Box>


          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
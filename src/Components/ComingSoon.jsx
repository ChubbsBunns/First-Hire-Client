import Box from '@mui/material/Box';
import rowletSpinning from '../assets/rowletSpinning.gif'

function ComingSoonPage() {
    return(
<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", height: "100vh", width: "100vw", flexDirection: "column" }}>
  <Box>
    I've not integrated my personal website yet, but will soon!
  </Box>
  <Box>
    So heres a rowlet instead
  </Box>
  <Box>
    <img src={rowletSpinning} />
  </Box>
</Box>
    )
}

export default ComingSoonPage;
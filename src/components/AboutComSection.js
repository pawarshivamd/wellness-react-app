import { Box, Container, Grid, Typography } from '@mui/material'
import TodayIcon from '@mui/icons-material/Today';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { Img } from '../ui';
import { aboutImg, imgAboutBg } from '../assets';

const AboutComSection = () => {
  return (
  <Box  className='about-section' sx={{ background: `url(${imgAboutBg}) `, backgroundRepeat: "no-repeat", backgroundSize: "cover", position: "relative", mb: 5 }}>
    <Container maxWidth="lg" border="1px solid red">
    <Grid container >
      <Grid item  lg={6} md={6}   sx={{display: { xs: "none", md: "block" }}}>
          <Box  className="img-box" >
            <Img src={aboutImg}  width="100%" height="100%" sx={{position:"absolute"}} />
          </Box>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Box className='about-contain-body'>
          <Typography component="p" className='about-text'><span className='line'></span> About Company</Typography>
          <Typography variant="h3" className='main-title'>More Than <span className='number-count'>15+</span> Years,we Provide Bussiness Solutions
          </Typography>
          <Typography className='sub-title'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.</Typography>
          <Box  sx={{ display: "flex" }} className='about-pera-body'>
            <Box  className='icon-body'>
              <Box className='icon-circle'>
                <TodayIcon  className='icon' />
              </Box>
            </Box>
            <Box>
              <Typography variant='h4' className='main-title'>
                Smart Bussiness Solutions
              </Typography>
              <Typography variant='p' className='sub-title'>
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
              </Typography>
            </Box>
          </Box>
          <Box  sx={{ display: "flex" }} className='about-pera-body'>
            <Box className='icon-body'>
              <Box className='icon-circle' >
                <CodeOffIcon  className='icon' />
              </Box>
            </Box>
            <Box>
              <Typography variant='h4' className='main-title'>
                Smart Bussiness Solutions
              </Typography>
              <Typography variant='p' className='sub-title'>
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
    </Container>
  </Box>
  )
}

export default AboutComSection

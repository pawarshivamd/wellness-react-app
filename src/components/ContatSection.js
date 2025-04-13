import contatg from "../assets/img/contact-g.png";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { Img } from "../ui";
import Input from "../ui/Input";

const ContatSection = () => {



  return (
    <Box className="contact-section-body" position='relative'>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item lg={7} md={6} sm={12} xs={12}>
            <Box className="contat-left-body">
              <Typography variant="h4" className="title-contact">Contact</Typography>
              <Typography variant="h5" className="request-text">Request A Free Consulting</Typography>
              <Typography variant="body2" className="sub-title">
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum
              </Typography>

              <Box component="form" sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Input name="name" placeholder="Name"  />
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Input name="email" placeholder="Email *"  type="email" />
                  </Grid>
                </Grid>

                <Box mt={2}>
                  <Input name="subject" placeholder="Subject *"  />
                </Box>

                <Box mt={2}>
                <textarea
                  id="outlined-basic"
                  className="input-text"
                  rows={4}
                  placeholder="Your Message *"
                />
                </Box>

                <Button variant="contained" type="submit" className="submit-button" sx={{ mt: 2 }}>
                  Submit Now
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item lg={5} md={6} sm={12} xs={0}>
            <Img
            sx={{position:"absolute",bottom:"0"}}
              src={contatg}
              height="400"
              width="400"
              className="contat-setion-img"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContatSection;

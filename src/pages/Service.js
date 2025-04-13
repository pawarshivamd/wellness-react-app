import { Box, Button,  Container, Grid, Typography } from "@mui/material";
import BgBannerHero from "../components/BgBannerHero";
import serviceherobg from "../assets/img/service-bg.png";
import TestimonialSection from "../components/Testimonial/TestimonialSection";
import { Link } from "react-router-dom";
import { services } from "../db";
import ServiceCard from "../components/Services/ServiceCard";
import HeadingSection from "../components/ui/HeadingSection";
const Service = () => {
  return (
    <Box>
      <BgBannerHero
        imgbgurl={serviceherobg}
        title="Services"
        sub_title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Box sx={{ margin: "50px 0" }}>
        <Container>
          <HeadingSection
            label="Services"
            title="Our Services"
            description="All the lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the
        Internet."
          />
          <Box className="our-service-section">
            <Grid container spacing={3}>
              {services.map((service, index) => (
                <Grid display="flex" item md={4} sm={6}  key={index}>
                  <ServiceCard {...service} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box sx={{ margin: "50px 0" }}>
        <Box className="service-solution-section">
          <Box className="service-solution-body">
            <Typography className="sub-title">Get Solutions Fast</Typography>
            <Typography className="main-title">
              Need First Class
              <span className="iner-text"> HR Consultants?</span>
            </Typography>
            <Link>
              <Button variant="contained" className="service-btn">
                Get A QUOTE NOW
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{ margin: "50px 0" }}>
        <TestimonialSection />
      </Box>
    </Box>
  );
};

export default Service;

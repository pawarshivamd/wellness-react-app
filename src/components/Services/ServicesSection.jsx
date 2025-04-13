import React from "react";
import HeadingSection from "../ui/HeadingSection";
import { services } from "../../db";
import { Box, Container, Grid } from "@mui/material";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const popularServices = services.filter(service => service.popular);
  return (
    <Container>
      <HeadingSection
        label="Services"
        title="Our Services"
        description="All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
      />
      <Box className="our-service-section">
        <Grid container spacing={3}>
          {popularServices.map((service, index) => (
            <Grid item lg={4} md={6} sm={6} xs={12} display='flex' key={index}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ServicesSection;

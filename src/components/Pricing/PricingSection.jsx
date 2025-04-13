import { Box, Container, Grid } from "@mui/material";
import PricingCard from "./PricingCard";
import { pricingPlans } from "../../db";

const PricingSection = () => {
  return (
    <Box>
      <Container>
        <Box className="labe-title">Pricing</Box>
        <Box className="main-section-title">See Pricing Plans</Box>
        <Box className="small-line-title-down"></Box>
        <Box className="sub-section-title">
          All the lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet.
        </Box>

        <Box className="pricing-plans-section">
          <Grid container spacing={2}>
            {pricingPlans.map((plan, idx) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={idx}>
                <PricingCard {...plan} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingSection;

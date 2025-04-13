import React from "react";
import BgBannerHero from "../components/BgBannerHero";
import pricingherobg from "../assets/img/pricingherobg.png";
import { Box } from "@mui/material";
import PortfolioSection from "../components/PortfolioSection";
const Portfolio = () => {
  return (
    <>
      <BgBannerHero
        imgbgurl={pricingherobg}
        title="Portfolio"
        sub_title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Box sx={{ my: 5 }}>
        <PortfolioSection />
      </Box>
    </>
  );
};

export default Portfolio;

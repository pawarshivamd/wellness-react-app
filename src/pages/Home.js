import {
  Box,
  ThemeProvider,
} from "@mui/material";
import { theme } from "../App";
import PortfolioSection from "../components/PortfolioSection";
import ContatSection from "../components/ContatSection";
import { HeroHomeSlides } from "../db";
import AboutComSection from "../components/AboutComSection";
import HeroSlider from "../components/ui/HeroSlider";
import ServicesSection from "../components/Services/ServicesSection";
import TestimonialSection from "../components/Testimonial/TestimonialSection";
import PricingSection from "../components/Pricing/PricingSection";
import BlogSection from "../components/Blog/BlogSection";

const Home = () => {

  return (
    <ThemeProvider theme={theme}>
      <HeroSlider HeroHomeSlides={HeroHomeSlides} />
      <AboutComSection />
      <Box sx={{ my: 5 }}>
        <ServicesSection />
      </Box>
      <Box sx={{ my: 10 }}>
        <PortfolioSection />
      </Box>
      <TestimonialSection />
      <Box sx={{ my: 5 }}>
        <PricingSection />
      </Box>
      <Box sx={{ my: 5 }}>
        <BlogSection />
      </Box>
      <ContatSection />
    </ThemeProvider>
  );
};

export default Home;

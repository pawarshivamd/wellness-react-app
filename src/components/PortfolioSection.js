import { Box, Card, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WorkApi } from "../db";
import HeadingSection from "./ui/HeadingSection";
import { Img } from "../ui";

// Make sure these EXACTLY match your WorkApi categories (including case)
const categories = [
  "All",
  "Development",
  "ui/ux",  // Changed from "UI/UX" to match WorkApi
  "Branding",
  "SEO",
  "Wordpress",
];

const PortfolioSection = () => {
  const [workItems, setWorkItems] = useState(WorkApi);
  const [activeLink, setActiveLink] = useState("All");

  const filterItems = (category) => {
    setActiveLink(category);
    
    if (category === "All") {
      setWorkItems(WorkApi);
      return;
    }

    const filteredItems = WorkApi.filter(item => 
      item.category === category  // Exact match now that cases are consistent
    );
    
    setWorkItems(filteredItems);
  };

  return (
    <Container>
      <HeadingSection
        label="Works"
        title="Our Portfolio"
        description="All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
      />

      <Box className="portfolio-link-group">
        {categories.map((cat) => (
          <Box
            key={cat}
            onClick={() => filterItems(cat)}
            className={`portfolio-link ${activeLink === cat ? "active" : ""}`}
            sx={{
              cursor: "pointer",
            }}
          >
            {cat}
          </Box>
        ))}
      </Box>

      <Grid container spacing={3}>
        {workItems.map((item) => (
          <Grid item lg={4} md={6} sm={6} xs={12} key={item.id}>
            <Card sx={{ height: "350px", overflow: 'hidden' }}>
              <Img
                src={item.imgwork}
                alt={item.category}
                sx={{ 
                  objectFit: "cover", 
                  height: "100%", 
                  width: "100%",
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PortfolioSection;
import { Box, Card, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WorkApi } from "../db";
import HeadingSection from "./ui/HeadingSection";
import { Img } from "../ui";
const categories = [
  "All",
  "Development",
  "UI/UX",
  "Branding",
  "SEO",
  "Wordpress",
];

const PortfolioSection = () => {
  const [workItems, setWorkItems] = useState(WorkApi);
  const [activeLink, setActiveLink] = useState("All");

  const filterItems = (category) => {
    setActiveLink(category);
    setWorkItems(
      category === "All"
        ? WorkApi
        : WorkApi.filter((item) => item.category === category)
    );
  };
  return (
    <Container>
      <HeadingSection
        label="Works"
        title="Our Portfolio"
        description="All the lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the
        Internet."
      />
      <Box className="portfolio-link-group">
        {categories.map((cat) => (
          <Link
            key={cat}
            className={`portfolio-link ${activeLink === cat ? "active" : ""}`}
            onClick={() => filterItems(cat)}
            style={{ cursor: "pointer" }}
          >
            {cat}
          </Link>
        ))}
      </Box>

      <Grid container spacing={3} sx={{ mt: 5 }}>
        {workItems.length > 0 ? (
          workItems.map((curEle, index) => {
            const { imgwork, category } = curEle;
            return (
              <Grid item lg={4} md={6} sm={6} xs={12} key={`${index}`}>
                <Card sx={{ height: "350px" }}>
                  <Img
                    src={imgwork}
                    alt={category}
                    sx={{ objectFit: "cover", height: "100%" }}
                  />
                </Card>
              </Grid>
            );
          })
        ) : (
          <Grid item xs={12}>
            <Box
              sx={{
                textAlign: "center",
                py: 5,
                color: "text.secondary",
                fontSize: "2.2rem",
              }}
            >
              🚫 No items found in this category.
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default PortfolioSection;

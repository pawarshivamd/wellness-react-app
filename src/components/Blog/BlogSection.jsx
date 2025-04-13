import { Box, Container, Grid } from "@mui/material";
import LatestBlogCard from "./LatestBlogCard";
import { LatestBlog } from "../../db";

const BlogSection = () => {
  return (
    <Container>
      <Box className="labe-title">Blog</Box>
      <Box className="main-section-title">Letest Articales</Box>
      <Box className="small-line-title-down"></Box>
      <Box className="sub-section-title">
        All the lorem Ipsum generators on the Internet tend to repeat
        predefined chunks as necessary, making this the first true generator
        on the Internet.
      </Box>
      <Grid container spacing={4} className="blog-section">
        {LatestBlog.map((blog) => (
          <Grid item lg={4} md={4} sm={6} xs={12} key={blog.id}>
            <LatestBlogCard {...blog} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogSection;

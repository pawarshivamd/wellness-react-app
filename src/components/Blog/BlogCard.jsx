import React from "react";
import { Img } from "../../ui";
import { Box, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { blogImg, img_alt, date, time, mainTitle, subTitle, ViewLink } = props
  return (
    <Card className="blog-card">
      <Link>
        <Box className="img-box">
          <Img src={blogImg} alt={img_alt} />
        </Box>
      </Link>
      <Box className="body-contain">
        <Box className="date-time-section">
          <Typography className="date-title">{date}</Typography>
          <Typography className="time-title">{time}</Typography>
        </Box>
        <hr />
        <Link className="main-title">{mainTitle}</Link>
        <Typography className="sub-title">{subTitle}</Typography>
        <Link className="link-text">{ViewLink}</Link>
      </Box>
    </Card>
  );
};

export default BlogCard;

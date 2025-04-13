// components/ui/BlogCard.jsx
import { Box, Typography } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import StarIcon from "@mui/icons-material/Star";
import { Img } from "../../ui";
import { ourUserImg } from "../../assets";

const BlogCard = ({ image, title, author, comments, stars }) => {
  return (
    <Box sx={{ height: "400px" }} className="img-section">
      <Img src={image} width="100%" height="100%" loading="lazy" className="blog-img" />
      <Box className="blog-contain-body">
        <Typography className="title-pre">{title}</Typography>
        <hr className="line" />
        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          <Box className="user-section">
            <Img src={ourUserImg} alt="" className="user-img" />
            <Typography className="user-name">{author}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ForumIcon sx={{ marginRight: "5px" }} /> {comments} Comments
          </Box>
          <Box className="start-section">
            <StarIcon sx={{ marginRight: "5px" }} /> {stars}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;

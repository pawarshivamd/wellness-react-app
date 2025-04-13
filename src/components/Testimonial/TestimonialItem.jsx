import { Box, Grid, Rating, Typography } from "@mui/material";
import { Img } from "../../ui";
const TestimonialItem = ({ img, name, role, message, rating = 5 }) => {
  return (
    <Grid container alignItems="center" className="testimonial-main-box">
      <Grid item lg={3} md={3} sm={3} xs={12}>
        <Box className="img-box">
          <Img src={img} className="img" />
        </Box>
        <Typography variant="h4" className="user-title">{name}</Typography>
        <Typography variant="h6" className="user-work-title">{role}</Typography>
      </Grid>
      <Grid item lg={9} md={9} sm={9} xs={12}>
        <Box className="testimonial-containt-body">
          <Typography variant="h5" className="main-title">{message}</Typography>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        </Box>
      </Grid>
    </Grid>
  );
};

export default TestimonialItem;

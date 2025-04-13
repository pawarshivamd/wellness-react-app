import { Box, Card, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Img } from "../../ui";

const ServiceCard = ({ img, title, description }) => {
  return (
    <Card className="card-body">
      <Box className="img-box">
        <Img src={img} alt={title} className="img-contain" />
      </Box>
      <Typography variant="h3" className="main-title">
        {title}
      </Typography>
      <Typography className="sub-title">{description}</Typography>
      <Box className="icon-box">
        <ArrowForwardIosIcon className="icon-right" />
      </Box>
    </Card>
  );
};

export default ServiceCard;

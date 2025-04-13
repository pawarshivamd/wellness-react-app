// components/ui/PricingCard.jsx
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
  } from "@mui/material";
  import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
  
  const PricingCard = ({ title, price, features }) => {
    return (
      <Card className="card-body">
        <Box className="main-head">{title}</Box>
        <CardContent>
          <Box className="price-nunmber">${price}</Box>
          <Typography className="month-name">Monthly</Typography>
          <Divider className="divider" />
          {features.map((feature, i) => (
            <Typography className="title-list" component="p" key={i}>
              {feature}
            </Typography>
          ))}
        </CardContent>
        <CardActions className="btn-section">
          <Button
            variant="outlined"
            className="btn"
            startIcon={<ShoppingCartOutlinedIcon className="shoping-icon" />}
          >
            Order Now
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default PricingCard;
  
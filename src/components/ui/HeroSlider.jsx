import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = ({ HeroHomeSlides = [], }) => {
  const theme = useTheme();

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      className="mySwiper hero-slider"
      style={{
        "--swiper-pagination-color": theme.palette.primary.primaryThemegreen,
      }}
    >
      {HeroHomeSlides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="swiper-slide"
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <Grid container className="hero-body">
            <Grid item lg={6} md={8} sm={12}>
              <Typography
                variant="h1"
                className="main-text"
                color={theme.palette.primary.textSecondry}
              >
                {slide.title}
              </Typography>
              <p className="sub-text">{slide.description}</p>
              <Button
                variant="contained"
                size="large"
                style={{
                  backgroundColor: theme.palette.primary.primaryThemegreen,
                  marginTop: "15px",
                }}
              >
                {slide.buttonText || "Started"}
              </Button>
            </Grid>
          </Grid>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;

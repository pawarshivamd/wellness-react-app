import { Box, Container, Typography } from "@mui/material";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialItem from "./TestimonialItem";
import { testimonialData } from "../../db";
import { theme } from "../../App";


const TestimonialSection = () => {
  return (
    <Box className="testimonial-section">
      <Box className="testimonial-body">
      
        <Typography variant="h4" className="main-title">Client Testimonial</Typography>
        <Box className="leftsite-set-line small-line-title-down"></Box>
        <Typography component="p" className="sub-title">
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
        </Typography>
      </Box>

      <Box className="testimonial-bg-box">
        <Container maxWidth="sm">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper2"
            style={{
              "--swiper-pagination-color": theme.palette.primary.primaryThemegreen,
            }}
          >
            {testimonialData.map((item, i) => (
              <SwiperSlide className="swiper-slide" key={i}>
                <TestimonialItem {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>
    </Box>
  );
};

export default TestimonialSection;

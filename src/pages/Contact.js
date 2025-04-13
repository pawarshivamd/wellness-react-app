import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import BgBannerHero from "../components/BgBannerHero";
import pricingherobg from "../assets/img/pricingherobg.png";
import ContatSection from "../components/ContatSection";
import CircleIcon from "@mui/icons-material/Circle";
import CheckIcon from "@mui/icons-material/Check";
import HeadingSection from "../components/ui/HeadingSection";
import { faqData } from "../db";
const Contact = () => {
  return (
    <Box>
      <BgBannerHero
        imgbgurl={pricingherobg}
        title="Contact us"
        sub_title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <ContatSection />

      <Box sx={{ mt: 5 }}>
        <Container>
          <HeadingSection
            label="Grow"
            title="We’re Global and Growing "
            description="Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built"
          />
          <Box className="" sx={{ my: 5 }}>
            <Grid container spacing={3}>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Card className="grow-card-box">
                  <Box className="office-box">Main Office</Box>
                  <Box className="round-box pink">USA</Box>
                  <Typography className="main-title">United States</Typography>
                  <Typography className="sub-title">
                    55/123 Norman Street, Sydney NSW 20
                  </Typography>
                </Card>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Card className="grow-card-box">
                  <Box className="office-box-visibility">Main Office</Box>
                  <Box className="round-box blue">AUS</Box>
                  <Typography className="main-title">Australia</Typography>
                  <Typography className="sub-title">
                    55/123 Norman Street, Sydney NSW 20
                  </Typography>
                </Card>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Card className="grow-card-box">
                  <Box className="office-box-visibility">Main Office</Box>
                  <Box className="round-box green">UK</Box>
                  <Typography className="main-title">United Kingdom</Typography>
                  <Typography className="sub-title">
                    55/123 Norman Street, Sydney NSW 20
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box className="faq-section" my={4}>
        <Container maxWidth="md">
          <Box className="faq-title">Frequently Asked Questions</Box>
          <Box>
            {faqData.map((cureEle, i) => (
              <FAQItem {...cureEle} />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
export const FAQItem = ({ question, paragraphs, list = [], note }) => (
  <Accordion className="faq-card-body">
    <AccordionSummary
      expandIcon={<CircleIcon className="circle-icon" />}
      aria-controls="panel-content"
      id="panel-header"
    >
      <Box className="faq-main-title">{question}</Box>
    </AccordionSummary>
    <AccordionDetails>
      <Box className="faq-ans-body">
        {paragraphs.map((para, i) => (
          <Typography key={i} className="text-sub">
            {para}
          </Typography>
        ))}

        {list.length > 0 &&
          list.map((item, i) => (
            <Typography key={i} className="list-text">
              <CheckIcon className="check-icon" /> {item}
            </Typography>
          ))}

        {note && (
          <>
            <Typography className="main-text">{note}</Typography>
            <Typography className="text-sub">
              If you have further questions, feel free to reach out to our
              support team.
            </Typography>
          </>
        )}
      </Box>
    </AccordionDetails>
  </Accordion>
);

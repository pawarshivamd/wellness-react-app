import { Box, Card, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import BgBannerHero from '../components/BgBannerHero'
import AboutComSection from '../components/AboutComSection'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { teamMembers, valueWorkApi } from '../db'
import { Img } from '../ui'
import { aboutHeroBg, aboutImg1, aboutImg2 } from '../assets'
import HeadingSection from '../components/ui/HeadingSection'

const About = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <Box>
      <BgBannerHero
        imgbgurl={aboutHeroBg}
        title="About us"
        sub_title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Box sx={{ mt: 5 }}>
        <AboutComSection />
      </Box>

      <Box className="counter-body-section">
        <Container>
          <Typography className='main-title'>
            Businesses all over the world trust <br /> Buffer to build their brand
          </Typography>

          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="space-around" mt={5}>
              <Box>
                <Typography className='counter-num-text'>
                  <span>{counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}</span> years
                </Typography>
                <Typography className='sub-title-num'>In Business</Typography>
              </Box>
              <Box>
                <Typography className='counter-num-text'>
                  <span>{counterOn && <CountUp start={0} end={7500} duration={2} delay={0} />}+</span>
                </Typography>
                <Typography className='sub-title-num'>Customers</Typography>
              </Box>
              <Box>
                <Typography className='counter-num-text'>
                  <span>{counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}k+</span>
                </Typography>
                <Typography className='sub-title-num'>Monthly Blog Readers</Typography>
              </Box>
              <Box>
                <Typography className='counter-num-text'>
                  <span>{counterOn && <CountUp start={0} end={7} duration={2} delay={0} />}m+</span>
                </Typography>
                <Typography className='sub-title-num'>Social Followers</Typography>
              </Box>
            </Box>
          </ScrollTrigger>
        </Container>
      </Box>

      <Box className="our-mission-section">
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box className="our-missson-left-body">
                <Typography className="our-title">Our Mission</Typography>
                <Box className="small-line"></Box>
                <Typography className='sub-title'>
                  Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built for ease of use and complexity.
                </Typography>
                <Box className='list-group-box'>
                  <Typography className='list-item'><CheckCircleOutlineIcon className='icon' /> Posting to social media, blogs, and messengers</Typography>
                  <Typography className='list-item'><CheckCircleOutlineIcon className='icon' /> Working with images and videos</Typography>
                  <Typography className='list-item'><CheckCircleOutlineIcon className='icon' /> The Future of Writing Blog Articles</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box className="img-box">
                    <Img src={aboutImg1} alt="Office space" width="100%" />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className="img-box">
                    <Img src={aboutImg2} alt="Team collaboration" width="100%" />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box>
        <Container>
          <HeadingSection
            label="Value"
            title="Our values"
            />
          <Box sx={{ my: 5 }}>
            <Grid container spacing={3}>
              {valueWorkApi.map(({ id, imgurl, title, subTitle }) => (
                <Grid item lg={4} md={4} sm={6} xs={12} key={id}>
                  <Card className='value-card'>
                    <Box className='img-box'>
                      <Img src={imgurl} className='img' alt={title} />
                    </Box>
                    <Typography className='main-title'>{title}</Typography>
                    <Typography className='sub-title'>{subTitle}</Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box>
        <Container>
        <HeadingSection
        label="Team"
        title="Creative minds"
        description="All the lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the
        Internet."
      />
          <Box sx={{ margin: "50px  0px" }}>
            <Grid container spacing={3}>
              {teamMembers.map((member, index) => (
                <Grid item lg={4} md={4} sm={6} xs={12} className='team-blog-card' key={index}>
                  <Box className="img-box">
                    <img src={member.image} alt={member.name} className='img' />
                    <Box className="contain-body">
                      <Typography className='title'>{member.name}</Typography>
                      <Typography className='sub-title'>{member.role}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default About

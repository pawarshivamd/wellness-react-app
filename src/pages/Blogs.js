import { Box, Container, Typography, Grid,} from '@mui/material'
import BgBannerHero from '../components/BgBannerHero'
import blogherobg from '../assets/img/blogbg.jpg'
import { recentblogapi } from '../db'
import BlogCard from '../components/Blog/BlogCard'
import HeadingSection from '../components/ui/HeadingSection'


const Blogs = () => {
  return (
    <Box>
      <BgBannerHero
        imgbgurl={blogherobg}
        title="Blog"
        sub_title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Box sx={{ mt: 5 }}>
        <Container>   
          <HeadingSection
              label="Blog"
              title="Our Artical"
              description="Popular articals are selected based on the numbers of readers"
          />
          <Box className="" sx={{ my: 5 }}>
            <Grid container spacing={2}>
              <Grid item  xs={12}>
                <Box className="blog-content">
                  <Box className="blog-text">
                    The basic of making the correct saas in <br className='br' /> industry.
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12}>
                <Box className="blog-content blog-img-two">
                  <Box className="blog-text-two">
                    <Typography className='main-title'>The basic of making the correct saas in industry.</Typography>
                    <Typography className='sub-title'>The basic of making the correct saas in industry.</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12}>
                <Box className="blog-content blog-img-three">
                  <Box className="blog-text">
                    The basic of making the correct saas in <br className='br' /> industry.
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="" sx={{ my: 5 }}>
          <HeadingSection
              label="Blog"
              title="Our Artical"
              description="Popular articals are selected based on the numbers of readers"
            />
            <Box className="" sx={{ my: 5 }}>
              <Grid container spacing={2}>
                {recentblogapi.map((cureEle, index) => {
                  return (
                    <Grid item md={4} sm={6} key={`${index}`}>
                      <BlogCard {...cureEle} />
                    </Grid>
                  )
                })}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Blogs

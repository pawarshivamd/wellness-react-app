import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import pricingherobg from '../assets/img/pricingherobg.png'
import BgBannerHero from '../components/BgBannerHero'
import PricingSection from '../components/Pricing/PricingSection'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
const Pricing = () => {
  return (
    <Box>
      <BgBannerHero
        imgbgurl={pricingherobg}
        title="Pricing"
        sub_title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Box sx={{ marginTop: "50px" }}>
        <PricingSection />
      </Box>
      <Box sx={{ marginTop: "50px" }}>
        <Container>
          <Box>
            <Grid container alignItems="center" spacing={2} sx={{
              padding: "10px", borderRadius: "12px", background: "#FFF", boxShadow: " 0px 7px 64px 0px rgba(0, 0, 0, 0.10)",
            }}>
              <Grid item lg={2} md={2} sm={3} xs={12}>
                <Box className="left-risk-body">
                  <Box className="icon-box"><VerifiedUserOutlinedIcon className='icon' /></Box>
                  <Typography className='main-text'>100%</Typography>
                  <Typography className='sub-text'>No-Risk</Typography>
                </Box>
              </Grid>
              <Grid item lg={10} md={10} sm={9} xs={12}>
                <Box className="right-risk-body">
                  <Typography className='main-title' >Our 100% No-Risk Money Back Guarantee</Typography>
                  <Typography className='sub-title'>"Over the next 5 days, make an informed decision if Thech meets the hype. If you're not whistling with joy from the content Jarvis wrote for you, then simply email we’ll instantly refund 100% of your money. . I'm confident that when you sign up today, you'll get exactly what you need to write content at scale, fast."</Typography>
                  <Typography className='main-title'>Co-Founder, CEO</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box sx={{ marginTop: "50px" }} className="packages-table-section">
        <Container>
          <Typography variant='h3' className='price-title'>Compare pricing packages</Typography>
          <Box className='table-container'>
            <table className='main-table'>
              <thead>
                <tr>
                  <th className='main-title-th feaures-text'> Features</th>
                  <th className='main-title-th'> Standard <br /><span> $7.99 / month</span></th>
                  <th className='main-title-th'> Super <br /><span> $14.99 / month</span></th>
                  <th className='main-title-th'> Supreme <br /><span>$19.99 / month</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" className='main-title-td'>
                  Social Platforms
                  </td>
                </tr>
                <tr>
                  <td className='category-title'>
                    Facebook
                  </td>
                  <td>
                    <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                </tr>
                <tr>
                  <td className='category-title'>
                    Twitter
                  </td>
                  <td>

                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                </tr>
                <tr>
                  <td className='category-title'>
                  Instagram
                  </td>
                  <td>

                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                </tr>
                <tr>
                  <td className='category-title'>
                  Google My Business
                  </td>
                  <td>

                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                </tr>
                <tr>
                  <td colSpan="4" className='main-title-td'>
                  Publish
                  </td>

                </tr>
                <tr>
                  <td className='category-title'>
                  Monthly Posts
                  </td>
                  <td>
                    <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                </tr>
                <tr>
                  <td className='category-title'>
                  Publish images			
                  </td>
                  <td>
                    
                  </td>
                  <td>
                  
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                </tr>
                <tr>
                  <td className='category-title'>
                  Post Recycling	
                  </td>
                  <td>
                    
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                </tr>
                <tr>
                  <td className='category-title'>
                  Custom Queues	
                  </td>
                  <td>
                    
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                </tr>
                <tr>
                  <td className='category-title'>
                  Hashtag Suggestions		
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                </tr>
                <tr>
                  <td className='category-title'>
                  Story Approvals	
                  </td>
                  <td>
                  
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                </tr>
                <tr>
                  <td colSpan="4" className='main-title-td'>
                  Analyze
                  </td>
                </tr>
                <tr>
                  <td className='category-title'>
                  Post Insights	
                  </td>
                  <td>
                  
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                </tr>
                <tr>
                  <td className='category-title'>
                  Followers Growth Trends
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                </tr>
                <tr>
                  <td className='category-title'>
                  Top Performing Posts	
                  </td>
                  <td>
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                </tr>
                <tr>
                  <td className='category-title'>
                  Content Approvals		
                  </td>
                  <td>
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                </tr>
                <tr>
                  <td className='category-title'>
                  Leave notes			
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                </tr>
                <tr>
                  <td className='category-title'>
                  Live Chat			
                  </td>
                  <td>
                  
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                  <td>
                  <CheckCircleOutlineOutlinedIcon className='check-icon' />
                  </td>
                </tr>
                

              </tbody>
              <tfoot>
              <tr>
                  <td colSpan="4">* Custom plans can also be offered</td>
                </tr>
              </tfoot>
            </table>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Pricing

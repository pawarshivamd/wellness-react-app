import { Box, Button, Container, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../assets';
import { Img } from '../../ui';
import ScrollToTop from '../../ui/ScrollToTop';

const Footer = () => {
  const handleNavLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <Container>
        <Box borderBottom="1px solid #FFF" paddingBottom={5} marginBottom={5} display="flex" flexWrap='wrap' alignItems="center" justifyContent="space-between">
          <Box>
            <Img src={Logo} alt="logo" className="logo-nav" />
          </Box>
          <Box display="flex" flexWrap="wrap">
            <FacebookIcon aria-label="Facebook" sx={{ mx: 1 }} className="icon-footer" />
            <InstagramIcon aria-label="Instagram" sx={{ mx: 1 }} className="icon-footer" />
            <TwitterIcon aria-label="Twitter" sx={{ mx: 1 }} className="icon-footer" />
            <LinkedInIcon aria-label="LinkedIn" sx={{ mx: 1 }} className="icon-footer" />
          </Box>
        </Box>
        <Grid container spacing={3}>
          <Grid item lg={7} md={7} sm={6} xs={12}>
            <Grid container>
              <Grid item lg={4} md={3} sm={6} xs={12}>
                <ul className="list-group">
                  <li className="title-link">Quick Links</li>
                  {["Home", "About", "Service", "Pricing"].map((label) => (
                    <li className="list-item" key={label}>
                      <NavLink
                        className="list-link"
                        to={`/${label === "Home" ? "" : label.toLowerCase()}`}
                        onClick={handleNavLinkClick}
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <ul className="list-group">
                  <li className="title-link">Help & Support</li>
                  {[
                    { label: "FAQ", to: "/" },
                    { label: "Blog", to: "/blog" },
                    { label: "Contact", to: "/contact" },
                    { label: "Support", to: "/" }
                  ].map(({ label, to }) => (
                    <li className="list-item" key={label}>
                      <NavLink className="list-link" to={to} onClick={handleNavLinkClick}>
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} md={5} sm={6} xs={12}>
            <Box className="sub-section-body">
              <Box className="title-sub">Subscribe to our Newsletter</Box>
              <Box className="sub-section">
                <input type="email" placeholder="Your email" className="input-body" />
                <Button variant="contained" className="btn" type="submit">
                  Subscribe
                </Button>
              </Box>

              <Box display="flex" justifyContent="space-between" mt={2}>
                <Box className="call-us-section">
                  <Box>Call us</Box>
                  <Box>+91 81286 83106</Box>
                </Box>
                <Box className="call-us-section">
                  <Box>Email us</Box>
                  <Box>info@boniksolutions.com</Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
       <ScrollToTop/>
      </Container>
    </footer>
  );
};

export default Footer;

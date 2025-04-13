import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Box className="error-section">
      <h1 className='main-title'>404 - Page Not Found </h1>
      <p class="zoom-area"><b>Sorry,</b> the page you are looking for does not exist. </p>
      <section class="error-container">
        <span class="four"><span class="screen-reader-text">4</span></span>
        <span class="zero"><span class="screen-reader-text">0</span></span>
        <span class="four"><span class="screen-reader-text">4</span></span>
      </section>
      <div class="link-container">
        <Link target="_blank" to="/" class="more-link">Go To Home Page</Link>
      </div>
    </Box>
  )
}

export default Error

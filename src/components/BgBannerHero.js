import { Box, Typography } from '@mui/material'
import React from 'react'

const BgBannerHero = (props) => {
  return (
    <Box className="bg-banner-hero-section" sx={{backgroundImage:`url(${props.imgbgurl} ) `}}>
          <Box className='bg-text-box'>
            <h1 className='main-title'> {props.title}</h1>
            <Typography className='sub-title'>{props.sub_title}</Typography>
      </Box>

    </Box>
  )
}

export default BgBannerHero

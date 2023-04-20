import React from 'react'
import InstagramIcon  from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from "@mui/material";
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <IconButton href="https://www.instagram.com/akash_akash33/">
            <InstagramIcon/>
            </IconButton>
            <IconButton href="https://github.com/akash2404akash">
            <GitHubIcon/>
            </IconButton>
            <span>
              <IconButton href="https://www.linkedin.com/in/akash-s-3a3911258">
          <LinkedInIcon />
          </IconButton>
          </span>
        </div>
        <p> &copy; 2023 akashportfolio.com</p>
    </div>
  )
}

export default Footer
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WebFont from 'webfontloader';
import ImageLinks from './ImageLinks';
import { style } from "@mui/system";
WebFont.load({
  google: {
    families: ['Roboto:400,700', 'sans-serif']
  }
});

const Homepage = () => {
  return (
    <div className="wrapper">
      <div className="homepage">
        <div className="content">
          <section id="section1">
            <div className="about">
              
              <div className="about-text">
                <div className="Name-Banner"><h2><c>ALYSSA FURMAN<br>
                
                </br></c></h2></div>
                <p>
                  Special Education Teacher turned <br></br>
                  Full Stack Software Developer <br></br>
                  with a passion for digital accessibility.
                  <br />
                
                </p>
              </div>
            </div>
          </section>
          <section id="section2">
          <div className="Skills">
            
            

{/* <section id="section3"> */}
<div className="contact">
              <div className="about">
              <div className="contact-icons">
              <a href="https://linkedin.com">
                  <LinkedInIcon fontSize="large"/>
                </a>

                <a href="https://github.com">
                  <GitHubIcon fontSize="large" />
                </a>
                <a href="mailto:furman3547@gmail.com">
                  <EmailIcon fontSize="large" />
                </a>
              </div>
            </div>
            </div>
          {/* </section> */}







            <div className="SkillIcons">

            <img src="https://i.imgur.com/Rn1fsHC.png"></img>
            <img src="https://i.imgur.com/SMA7g0V.png"></img>
            <img src="https://i.imgur.com/G8eV9f0.png"></img>
            <img src="https://i.imgur.com/iUrnNlm.png"></img>
            <img src="https://i.imgur.com/iHsoEbL.png"></img>
                  







            </div>
            <br></br>
          <ImageLinks/>
 







          </div>
              
          </section>
          
        </div>
      </div>
    </div>
  );
};

export default Homepage;

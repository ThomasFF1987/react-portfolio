import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import pic01 from '../assets/images/portrait.jpg';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={pic01} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ThomasFF1987" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/thomasbsani" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Thomas Baggi-Sani</h1>
          <p>Full Stack Game Developer</p>
          <p>15+ years working with Unity</p>
          <p>Specialized in mobile game development</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ThomasFF1987" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/thomasbsani" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
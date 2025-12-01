import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQFJAMGCUjHcdQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1665560104814?e=1766016000&v=beta&t=7BCiT631EPQbuGTxeYpmczS5RRUrCAHACroZqiuskhY" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ThomasFF1987" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/thomasbsani" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>(WIP) Thomas Baggi-Sani</h1>
          <p>Senior Game Developer</p>

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
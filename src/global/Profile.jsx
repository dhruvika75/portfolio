

import React, { useState } from "react";
import "../assets/css/profile.css";
import profileimg from "../assets/image/profile img.jpeg";

function Profile() {
  const [copied, setCopied] = useState(false);
  const email = "dhruvikakakadiya0@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div>
      <div className="profile">
        <div className="container">
          <div className="profile-sec">
            <img src={profileimg} alt="Profile" />
            <h4>Dhruvika Kakadiya 👋</h4>
            <p style={{alignItems:"justify"}}>
           <b > <span style={{color:"#576076"}}>Frontend Developer</span> | 6 Months Experience
           Skilled in <span style={{color:"#576076"}}>HTML, CSS, JavaScript, and React.js,</span> with a strong grasp of UI/UX principles. Experienced in building <span style={{color:"#576076"}}>responsive web applications, optimizing performance</span>, and collaborating with teams. Passionate about clean code and continuous learning.</b>
            </p>
            <div className="profile-btn">
              <div className="btn1">
                <a href="#">
                  <i className="fa-solid fa-phone-volume"></i> Book A Call
                </a>
              </div>
              <div className="btn2" onClick={copyToClipboard}>
                <a href="#">
                  <i className="fa-regular fa-copy"></i>
                  {copied ? "Copied!" : "Copy Email"}
                </a>
                
              </div>
             
              
            </div>
            <div class="port-icons pt-3">
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="https://www.linkedin.com/in/dhruvika-kakadiya-09127528b/"><i class="fa-brands fa-linkedin"></i></a>
             <a href="https://github.com/dhruvika75"> <i class="fa-brands fa-github"></i></a>
             <a href=""> <i class="fa-brands fa-whatsapp"></i></a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

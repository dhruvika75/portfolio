import React from 'react'
import Header from '../global/Haeder'
import Profile from '../global/Profile'
import hellow from '../assets/image/hellow.png'
import '../assets/css/about.css'
import { ReactComponent as HtmlIcon } from '../assets/image/html.svg';
import { ReactComponent as CssIcon } from '../assets/image/css.svg';
import { ReactComponent as JavaScriptIcon } from '../assets/image/javascript.svg';
import { ReactComponent as NodeIcon } from '../assets/image/node.svg';
import { ReactComponent as FirebaseIcon } from '../assets/image/fire base.svg';
import nextjs from '../assets/image/nextjs-icon-svgrepo-com.svg'
// import { ReactComponent as ReactIcon } from '../assets/image/react.svg';
import expresjs from '../assets/image/expressjs-icon.svg'
import MongoDb from '../assets/image/mongodb-svgrepo-com.svg'
import tailwind from '../assets/image/tailwind-css-svgrepo-com.svg'
import { ReactComponent as ReactIcon } from '../assets/image/react-svgrepo-com.svg';

import { ReactComponent as MuiIcon } from '../assets/image/material ui.svg';
import { ReactComponent as PostmanIcon } from '../assets/image/post man.svg';



function About() {
  return (
    <div>
      <div className="container">
        <div>
          <Header />
        </div>
        <div className='about-sec d-flex justify-content-center'>
          <Profile />
          <div class="about-inner-sec">
            <p ><span className='aboutname'>Hi,This Is </span><span style={{ color: "#4770FF", fontWeight: "700", fontSize: "30px" }}>Dhruvika Kakadiya <img src={hellow} alt="" /></span></p>
            {/* <p><span style={{ color: "#5C657A" }}>
              A Passionate </span> <span style={{ color: "#4770FF" }}>Full Stack Developer 🖥️  <span style={{ color: "#5C657A" }}>&</span> <span style={{ color: "#5C657A" }}>Product Designer</span> <span>having </span> <span style={{ color: "#5C657A" }}>12 years </span> <span style={{ color: "#4770FF" }}>of Experiences over 24+ Country Worldwide.</span></span></p>
            <p style={{ fontSize: "25px", fontWeight: "600", paddingTop: "10px" }}>Working With 7 Tools ✨ Worldwide</p> */}
             <p style={{alignItems:"justify"}}>
           <b > <span style={{color:"#576076"}}>Frontend Developer</span> | 6 Months Experience
           Skilled in <span style={{color:"#576076"}}>HTML, CSS, JavaScript, and React.js,</span> with a strong grasp of UI/UX principles. Experienced in building <span style={{color:"#576076"}}>responsive web applications, optimizing performance</span>, and collaborating with teams. Passionate about clean code and continuous learning.</b>
            </p>

            <ul style={{ display: "flex", gap: "10px" }} id="s-icon">
              <div className='iconsservices'>

                <li><HtmlIcon width="50" height="50" /></li>

                <b>HTML</b>
              </div>
              <div class="iconsservices">

                <li><CssIcon width="50" height="50" /></li>
                <b>CSS</b>
              </div>
              <div class="iconsservices">
                <li><JavaScriptIcon width="50" height="50" /></li>
                <b>Js</b>
              </div>
              <div class="iconsservices">
                <li><ReactIcon width="50" height="50" /></li>
                <b>React Js</b>
              </div>


            </ul>
            <ul style={{ display: "flex", gap: "10px" }} id="s-icon">

              <div class="iconsservices">
                <li><MuiIcon width="50" height="50" /></li>
                <b>mui</b>
              </div>
              <div class="iconsservices">
                <li><NodeIcon width="50" height="50" /></li>
                <b>Node Js</b>
              </div>
              <div class="iconsservices">
                <li><PostmanIcon width="50" height="50" /></li>
                <b>Postman</b>
              </div>
              <div class="iconsservices">
                <li><FirebaseIcon width="50" height="50" /></li>
                <b>Firebase</b>
              </div>

            </ul>
            <ul style={{ display: "flex", gap: "10px" }} id="s-icon">
              <div className='iconsservices'>

                <li><img src={expresjs} alt="" style={{ width: "70%" }} /></li>

                <b>Express js</b>
              </div>
              <div class="iconsservices">

                <li><img src={MongoDb} alt="" /></li>
                <b>MongoDB</b>
              </div>
              <div class="iconsservices">
                <li> <img src={nextjs} alt="" /></li>
                <b>Next js</b>
              </div>
              <div class="iconsservices">
                <li><img src={tailwind} alt="" /></li>
                <b>Tailwind CSS</b>
              </div>


            </ul>
            <p ><marquee behavior="" direction="left">
              <span style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <i class="fa-solid fa-circle" style={{ fontSize: "10px" }}></i><li>Let's 👋 Work Together</li>
                <i class="fa-solid fa-circle" style={{ fontSize: "10px" }}></i><li>Let's 👋 Work Together</li>
                <i class="fa-solid fa-circle" style={{ fontSize: "10px" }}></i><li>Let's 👋 Work Together</li>
              </span>


            </marquee></p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About

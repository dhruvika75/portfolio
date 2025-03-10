import React from 'react'
import '../assets/css/home.css'
import Header from '../global/Haeder'
import Profile from '../global/Profile'
import adminpanel from '../assets/image/admin panel.png'

import productdesign from '../assets/image/product.svg'
import branding from '../assets/image/branding.svg'
import hellow from '../assets/image/hellow.png'

import landingpage from '../assets/image/landing page.svg'
import webdevelopment from '../assets/image/web-development.svg'
import { ReactComponent as HtmlIcon } from '../assets/image/html.svg';
import { ReactComponent as CssIcon } from '../assets/image/css.svg';
import { ReactComponent as JavaScriptIcon } from '../assets/image/javascript.svg';
import { ReactComponent as NodeIcon } from '../assets/image/node.svg';
import { ReactComponent as FirebaseIcon } from '../assets/image/fire base.svg';
import { ReactComponent as ReactIcon } from '../assets/image/react-svgrepo-com.svg';
import { ReactComponent as MuiIcon } from '../assets/image/material ui.svg';
import { ReactComponent as PostmanIcon } from '../assets/image/post man.svg';
import Title from '../pages/Title'




function Home() {
  return (
    <>
      <div className="container" id="homepage">

        <Header />

        <div className="d-flex alig-item-center" id="home">
          <Profile />
          <div className='home-direction'>
            <div className="expriance d-flex">
              <div class="workexpriance">
                {/* <h4>My Expert Area</h4> */}
                <Title title="My Expert Area"/>
                <ul style={{ display: "flex" }}>
                  <div className='icons'>

                    <li><HtmlIcon width="50" height="50" /></li>

                    <b>HTML</b>
                  </div>
                  <div class="icons">

                    <li><CssIcon width="50" height="50" /></li>
                    <b>CSS</b>
                  </div>
                  <div class="icons">
                    <li><JavaScriptIcon width="50" height="50" /></li>
                    <b>Js</b>
                  </div>
                  <div class="icons">
                    <li><ReactIcon width="50" height="50" /></li>
                    <b>React Js</b>
                  </div>

                </ul>
                <ul style={{ display: "flex" }}>
                  <div class="icons">
                    <li><MuiIcon width="50" height="50" /></li>
                    <b>mui</b>
                  </div>
                  <div class="icons">
                    <li><NodeIcon width="50" height="50" /></li>
                    <b>Node Js</b>
                  </div>
                  <div class="icons">
                    <li><PostmanIcon width="50" height="50" /></li>
                    <b>Postman</b>
                  </div>
                  <div class="icons">
                    <li><FirebaseIcon width="50" height="50" /></li>
                    <b>Firebase</b>
                  </div>
                </ul>
              </div>
              <div class="recentproject">
                <div style={{ display: "flex", justifyContent: "space-between" }}>   <Title title="Recent Projects"/> <span><a href="work">ALL PROJECTS <i class="fa-solid fa-arrow-right"></i></a></span></div>
                <img src={adminpanel} alt="" />
              </div>

            </div>
            {/* ====servicres============= */}
            <div className='service-sec'>
              <div class="services">
                <span className='d-flex justify-content-between'>  <Title title="Services I Offered"/> <p><a href="service">See All Services<i class="fa-solid fa-arrow-right"></i></a></p></span>

                <div class="servicesicon">

                  <div class="service1">
                    <div class="servicesimg"><img src={productdesign} alt="" /></div>
                    <span style={{ whiteSpace: "nowrap" }}>Product Design</span>
                  </div>
                  <div class="service1">
                    <div class="servicesimg"><img src={branding} alt="" /></div>
                    <span>Branding</span>
                  </div>
                  <div class="service1">
                    <div class="servicesimg"><img src={webdevelopment} alt="" /></div>
                    <span>Web Development</span>
                  </div>
                  <div class="service1">
                    <div class="servicesimg"><img src={landingpage} alt="" /></div>
                    <span>landing page</span>
                  </div>



                </div>

              </div>
              <div class="talkwith">
                <p><marquee behavior="" direction="left">freelancer at Your Service 🚀 Crafting Designs That Speak!</marquee></p>
                <h1><span>Lets <img src={hellow} alt="" style={{ width: "15%" }} /></span></h1>
                <h1>Work Together</h1>
                <span><a href="contact">Lets Talk</a></span>


              </div>

            </div>

          </div>



        </div>





      </div>
    </>
  );
}

<svg width="800px" height="800px" viewBox="0 0 64 64" style={{
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinejoin: "round",
}}>

</svg>

export default Home


import React, { Profiler, useState } from 'react';
import Header from '../global/Haeder'
import Profile from '../global/Profile'
import ecommerce from '../assets/image/ecommerce-website-commerce-and-shopping-2-svgrepo-com.svg'
import landingpage from '../assets/image/landing page.svg'
import webdevelopment from '../assets/image/web-development.svg'

import productdesign from '../assets/image/product.svg'
import branding from '../assets/image/branding.svg'

import '../assets/css/home.css';
import '../assets/css/service.css';


const FaqItem = ({ title, description ,link}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={handleClick}>
        {title}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9660;</span> {/* Down arrow when open */}
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        {description}
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        {link}
      </div>
    </div>
  );
};

const FaqList = ({ faqs }) => {
  return (
    <div>
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          title={faq.title}
          description={faq.description}
          link={faq.link}
        />
      ))}
    </div>
  );
};


const faqs = [
  {
    title: 'Project 1: Portfolio Website',
    description: 'A personal portfolio website built using React and CSS.',
    link: 'https://github.com/yourusername/portfolio'
  },
  {
    title: 'Project 2: E-commerce Website',
    description: 'An e-commerce website with React, Node.js, and MongoDB for full-stack development.',
    link: 'https://github.com/yourusername/e-commerce-site'
  },
  {
    title: 'Project 3: Task Manager',
    description: 'A simple task management app built with React and Redux.',
    link: 'https://github.com/yourusername/task-manager'
  },
];

function Service() {
  return (
    <>
      <div className="container">
        <div>
          <Header/>
        </div>
        <div className="services-main d-flex">
          <Profile />
          <div className="services-section">
            <h3 style={{ fontWeight: '600' }}>
              <span>Services I</span> <span style={{ color: '#4770FF' }}>Offered</span>
            </h3>
            <p className="serv-des">
              <span style={{ fontWeight: '600', color: '#576076' }}>
                Transforming Ideas into Innovative Reality, Elevate Your Vision with Our Expert
              </span>{' '}
              <span style={{ fontWeight: '600' }}>Product Design and Development</span>{' '}
              <span style={{ fontWeight: '600', color: '#576076' }}>Services!</span>
            </p>
            <div className="service-boxs">
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
<div class="service1">
  <div class="servicesimg"><img src={ecommerce} alt="" /></div>
  <span>e commerce</span>
</div>



</div>
            </div>
            <div>
              <h3 style={{paddingTop:"20px",paddingBottom:"20px"}}>Frequently Asked Questions</h3>
              <div className="faq-container">
                <FaqList faqs={faqs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;

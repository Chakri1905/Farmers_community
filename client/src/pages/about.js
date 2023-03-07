import React from 'react';
import './about.css';
import farmers from './farmers.jpg';
const About = () => {
return (
	<div>
      <h1>About Our Website</h1>
	  <img src={farmers} alt="farmer" className="about-image" />
      <p>Our website is dedicated to helping farmers connect with each other, share information, and improve their farming practices. We provide a platform for farmers to write about their experiences and learn from others in the community.</p>
      <h2>Our Mission</h2>
      <p>Our mission is to create a space where farmers can come together to support one another and share their knowledge. We believe that by working together, we can create a stronger and more sustainable farming community.</p>
      <h2>Contact Us</h2>
      <p>If you have any questions or comments about our website, please feel free to contact us at farmersconnect@example.com.</p>
    </div>
  );
};

export default About;

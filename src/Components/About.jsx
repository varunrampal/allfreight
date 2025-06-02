import React from 'react'
import aboutImage from '../assets/images/aboutus.jpg'
const About = () => {
  return (
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src={aboutImage} alt="Image" class="img-fluid"/>
          </div>
          <div class="col-md-6">
            <span class="text-serif text-primary">About Us</span>
            <h3 class="heading-92913 text-black">Welcome To Our Website</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, illum, quasi. Odit velit deserunt eligendi unde, enim. Enim fugiat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eius ullam impedit architecto debitis facilis!</p>
            <p><a href="#" class="btn btn-primary py-3 px-4">Learn More</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
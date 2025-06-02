import React from 'react'
import logoImage from '../assets/images/logo.png'

const Header = () => {
    return (
   <div class="header-top bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6 col-lg-3">
            <a href="index.html">
              <img src={logoImage} alt="Image" class="img-fluid"/>
          
            </a>
          </div>
          <div class="col-lg-3 d-none d-lg-block">

            {/* <div class="quick-contact-icons d-flex">
              <div class="icon align-self-start">
                <span class="icon-location-arrow text-primary"></span>
              </div>
              <div class="text">
                <span class="h4 d-block">Fraser Valley</span>
                <span class="caption-text">BC, CA</span>
              </div>
            </div> */}

          </div>
          <div class="col-lg-3 d-none d-lg-block">
            <div class="quick-contact-icons d-flex">
              <div class="icon align-self-start">
                <span class="icon-phone text-primary"></span>
              </div>
              <div class="text">
                <span class="h4 d-block">604 217 2992</span>
                {/* <span class="caption-text">Phone</span> */}
              </div>
            </div>
          </div>

          <div class="col-lg-3 d-none d-lg-block">
            <div class="quick-contact-icons d-flex">
              <div class="icon align-self-start">
                <span class="icon-envelope text-primary"></span>
              </div>
              <div class="text">
                <span class="h4 d-block">info@a11freight.com</span>
                {/* <span class="caption-text">Email</span> */}
              </div>
            </div>
          </div>

          <div class="col-6 d-block d-lg-none text-right">
              <a href="#" class="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span
                class="icon-menu h3"></span></a>
          </div>
        </div>
      </div>
      


      
      <div class="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block" role="banner">

      <div class="container">
        <div class="d-flex align-items-center">
          
          <div class="mx-auto">
                 <nav class="site-navigation position-relative text-right" role="navigation">
              <ul class="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                <li class="active">
                  <a href="index.html" class="nav-link text-left">Home</a>
                </li>
                <li>
                  <a href="about.html" class="nav-link text-left">About Us</a>
                </li>
                <li>
                  <a href="services.html" class="nav-link text-left">Services</a>
                </li>
                <li>
                    <a href="testimonials.html" class="nav-link text-left">Book</a>
                </li>
                
                <li>
                    <a href="contact.html" class="nav-link text-left">Contact</a>
                  </li>
              </ul>                                                                                                                                                                                                                                                                                          
            </nav>

          </div>
         
        </div>
      </div>

    </div>
    
   </div>
    
    )
}

export default Header
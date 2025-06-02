import React from 'react'
import logoImage from '../assets/images/logo.png'

const Footer = () => {
  return (
      <div class="footer bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <p class="mb-4"><img src={logoImage} alt="Image" class="img-fluid"/></p>
            <p>Ensure timely and secure delivery across British Columbia, Canada.</p>  
            
          </div>
          <div class="col-lg-3">
            <h3 class="footer-heading"><span>Our Company</span></h3>
            <ul class="list-unstyled">
                <li><a href="#">About</a></li>
                <li><a href="#">Rates</a></li>
                <li><a href="#">Services</a></li>
                
            </ul>
          </div>
          <div class="col-lg-3">
              <h3 class="footer-heading"><span>Our Services</span></h3>
              <ul class="list-unstyled">
                  <li><a href="#">Full Truck Load</a></li>
                  <li><a href="#">Partial Truck Load</a></li>
                 
              </ul>
          </div>
          <div class="col-lg-3">
              <h3 class="footer-heading"><span>Contact</span></h3>
              <ul class="list-unstyled">
                  <li><a href="#">Contact Us</a></li>
                
              </ul>
          </div>
        </div>


      </div>
    </div>
    
  )
}

export default Footer
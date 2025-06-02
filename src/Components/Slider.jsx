import React from 'react'
import backgroundImage2 from '../assets/images/hero_2.jpg'
import backgroundImage1 from '../assets/images/hero_123.jpg'

const Slider = () => {
    return (
        <div class="hero-slide owl-carousel site-blocks-cover">
           
            <div class="intro-section"

                style={{
                   backgroundImage: `url(${backgroundImage2})`

                }}

            >
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7 text-left" data-aos="fade-up">
                            <h1>Fast Delivery</h1>
                            <p>We offer fast delivery throughout the Fraser Valley and across all of British Columbia.</p>
                            <p><a href="#" class="btn btn-primary py-3 px-5">Read More</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="intro-section"     style={{
                   backgroundImage: `url(${backgroundImage1})`

                }}>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7  text-left" data-aos="fade-up">
                            <h1>Affordable freight charges</h1>
                            <p>Competitive freight rates — reliable, efficient, and affordable.</p>
                            <p><a href="#" class="btn btn-primary py-3 px-5">Read More</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Slider
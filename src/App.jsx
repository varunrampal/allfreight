import { useState } from 'react'
import Header from './Components/Header'
import Slider from './Components/Slider'
import About from './Components/About'
import Features from './Components/Features'
import BannerBottom from './Components/BannerBottom'
import Booking from './Components/Booking'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import Whatsapp from './Components/Whatsapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div class="site-wrap">

    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>
    <Header/>
    <Slider/>
    <About/>
  
    <Booking/>
      <BannerBottom/>
    <Testimonials/>
    <Footer/>
    <Whatsapp/>
    </div>
    </>
  )
}

export default App

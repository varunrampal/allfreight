import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Whatsapp from './Components/Whatsapp'
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';
import ContactPage from './Pages/ContactPage';
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
    <Router>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
     
   
    </Router>
   
<Whatsapp/>



    {/* <Header/>
    <Slider/>
    <About/>
  
    <Booking/>
      <BannerBottom/>
    <Testimonials/>
    <Footer/>
    <Whatsapp/> */}
    </div>
    </>
  )
}

export default App

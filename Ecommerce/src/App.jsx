import Aos from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
function App() {
  const [orderPopup, setorderPopup] = useState(false);

  const handelOrderPopup = () => {
    setorderPopup(!orderPopup);
  }
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
    <div className='duration-200 bg-white dark:bg-gray-900 dark:text-white'> 
      <Navbar handelOrderPopup={handelOrderPopup} />
      <Hero handelOrderPopup={handelOrderPopup} />
      <Banner />
      <Products />
      <Footer />
    </div>
      
    </>
  )
}

export default App

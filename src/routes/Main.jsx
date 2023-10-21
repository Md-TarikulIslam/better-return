import React, { useEffect, useState } from 'react'
import Header from '../components/shared/Header'
import { Outlet } from 'react-router-dom'
import { Bar } from '../components/shared/Bar'
import { Footer } from '../components/shared/Footer'
import PopUp from '../components/shared/PopUp'
import Offer from '../components/shared/Offer'
import Whatsapp from '../components/shared/Whatsapp'

const Main = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 550) {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className='relative'>
      <Header />
      <div>
        <Outlet />
        <div className='fixed bottom-96 right-0 ori z-50 lg:right-2'>
          <Offer />
        </div>
      </div>
      <Bar />
      {/* <div className="fixed  flex bottom-16 lg:bottom-4 right-2 z-50">{<PopUp showPopup={showPopup} setShowPopup={setShowPopup} />}</div> */}
      <Whatsapp />
      <Footer />
    </div>
  )
}

export default Main

import React from 'react'
import logo from "../../assets/images/logo/whatsapp.png"

const Whatsapp = () => {
    const recipientPhoneNumber = "46708698276";
  return (
    <div className='fixed right-5 bottom-20 lg:bottom-10 '>
    <a
      href={`https://wa.me/${recipientPhoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={logo} className='w-14 h-14' alt="" />
    </a></div>
  )
}

export default Whatsapp
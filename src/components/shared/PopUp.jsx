import React, { useState } from 'react'
import img from '../../assets/images/popup/1.jpg'

const PopUp = ({showPopup, setShowPopup}) => {
    const [close, setClose] = useState(false)
    
    const handleClose =()=>{
        setClose(true)
    }

    return (
        <div className="w-40 lg:w-full">
           
            {
                showPopup && !close && <div className='p-2 lg:p-6  shadow-lg rounded-xl text-black bg-white'>
                    <div className='flex justify-between items-center'>
                        <p className='mb-2 text-xs lg:text-lg'>Upcoming Match</p>
                        <button className='font-bold' onClick={handleClose}>X</button>
                    </div>
                  <a target='_blank' href="https://www.hltv.org/events/6863/esl-pro-league-season-18">  <img className='rounded-xl' src={img} alt="" /></a>
                </div>
            }

        </div>
    )
}

export default PopUp

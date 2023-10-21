import React from 'react'
import bg from '../assets/images/navbar/2.webp'
import image from '../assets/images/roi/1.png'
import image2 from '../assets/images/roi/2.png'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

import { Button } from '@material-tailwind/react'
import { ScrollRestoration } from 'react-router-dom'

const CSGO = () => {

    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };
    return (
        <div className='mt-16'>
            <div className='relative bg-[#edf2f8]' style={backgroundStyle}>
                <div className='h-screen'>
                    <div className='z-30 absolute top-40 left-5 lg:left-40 font-bold text-lg tracking-widest '>
                        <p className='text-[#1386fd] uppercase tracking-widest'>/supported sport</p>
                        <p className='text-7xl font-bold text-white'>CS:GO</p>
                        <p className='text-xl mt-2 text-gray-100'>From the biggest tournaments to the lower leagues, our AI-based platform helps you <br /> identify winning opportunities and make informed decisions.

                        </p>
                    </div>
                </div>

            </div>
            <div className='max-w-screen-xl mx-auto px-5 lg:px-0'>
                <p className='uppercase text-[#1386fd] tracking-widest font-semibold mt-10'>impeccable winning rate</p>
                <p className='text-5xl lg:text-7xl font-bold'>Our Return On Investment (ROI)</p>
                <p className='text-xl mt-2 text-[#627291]'>We assume 1000 bucks as initial amount. Then we invest 15% in each match (Current balance’s 15%)</p>
                <p className='text-[#596a8b] font-bold my-2 text-xl'>Formula = (Balance – (Balance×15%) ) + (Win Odds×(Balance×15%))</p>
                <p className='text-xl text-[#627291]'>f we lose, Win odds is 0. So it’s deduct from my current balance. If we win, We multiply win odds with 15% of balance. Hence, current balance amount increases.</p>
            </div>

            <div className='max-w-screen-xl mx-auto'>
                <p className='text-7xl font-semibold text-[#333333] my-10 '>CS:GO ROI</p>
                <p className='text-center font-bold  text-xl my-20'>Week 36</p>


                <div className='flex w-full flex-col lg:flex-row gap-10 mx-auto my-5 px-5 lg:px-0'>
                    <div className='w-full'>
                        <div className='drop-shadow-xl'>
                            <img className='rounded-xl h-[354px] w-full transition duration-700 delay-100 ease-in-out hover:scale-110' src={image} alt="" />
                        </div>
                        <div className='drop-shadow-xl rounded-xl min-w-full p-2 bg-white mt-10'>
                            <p className='text-lg font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' /> Invest $1000, get $1560.97 in 7 days!</p>
                            <p className='text-lg font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' /> Invest $3000, get $4682.68 in 7 days!</p>
                            <p className='text-lg font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' />
                                Invest $5000, get $7804.85 in 7 days!</p>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className='drop-shadow-xl '>
                            <img className='rounded-xl h-[354px] w-full transition duration-700 delay-100 ease-in-out hover:scale-110' src={image2} alt="" />
                        </div>
                        <div className='drop-shadow-xl rounded-xl  p-2 bg-white mt-10'>
                            <p className='text-lg font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' /> Invest $1000, get $2286.48 in 30 days!</p>
                            <p className='text-lg font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' /> Invest $3000, get $6859.45 in 30 days!</p>
                            <p className='text-lg font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' />
                                Invest $5000, get $10547.57 in 30 days!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-screen-xl mx-auto px-5 lg:px-0'>
                <p className='uppercase text-[#1386fd] tracking-widest font-semibold'>understand the forecast</p>
                <p className='text-5xl lg:text-7xl font-bold my-5'>General information</p>
                <div>
                    <p className='text-xl font-semibold'>CS:GO</p>
                    <p className='text-lg text-[#687896] mt-2'>Based on previous games we have used our AI algorithm to predict the winner team.</p>
                </div>
                <div>
                    <iframe className='rounded-lg w-[300px] my-10 lg:w-[560px] h-[315px]' src="https://www.youtube.com/embed/yT_sBiLBitI?si=9DrU11JV01t20mGo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <p className='text-xl font-semibold'>How can I invest in this?</p>
                    <p className='text-lg text-[#687896] mt-2'>Its easy, simple and very secure. You sign up for the package that fits your needs and size of investment. Its important that you make your choice for how much time you want to spent everyday to grow your investment.</p>
                </div>
                <Button className='bg-[#064cfa] rounded-none text-xs lg:px-10 lg:py-5 px-7 py-3 my-5 lg:my-5 '>14 days for free</Button>


            </div>
            <div className='max-w-screen-xl flex flex-col lg:flex-row px-5 lg:px-0 mx-auto justify-between gap-10  my-20'>
                <div className='flex-1'>
                    <p className='uppercase text-[#1386fd] tracking-widest font-semibold'>COUNTERSTRIKE</p>
                    <p className='text-5xl lg:text-7xl font-bold my-5'>Technical
                        predictions</p>
                    <p className='text-lg text-[#687896] mt-2'>Bet:ter Return team are using Artificial Intelligence (AI) and Machine Learning (ML) algorithm, considering the past 3 years of all kinds of CS: GO tournaments data, and came up with several Radom Forest models and Neural Network models. Clustering all the model’s results we came up with a winning prediction or winning forecast accuracy. To achieve more accurate results we tune all the models every day before publishing them to our members. Depending on our advice we are sure that you can win the matches.</p>

                </div>
                <div className='flex-1'>
                    <img className=' rounded-2xl' src={bg} alt="" />
                </div>
            </div>
            <ScrollRestoration />
        </div>
    )
}

export default CSGO

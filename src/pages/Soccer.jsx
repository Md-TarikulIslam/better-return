import React from 'react'
import bg from '../assets/images/navbar/1.webp'
import bg2 from "../assets/images/bg/website-grid-tiles.svg"
import image from '../assets/images/roi/1.png'
import image2 from '../assets/images/roi/2.png'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import img1 from "../assets/images/featured/1.webp"
import img2 from "../assets/images/featured/2.webp"
import img3 from "../assets/images/featured/3.webp"
import img4 from "../assets/images/featured/4.webp"
import img5 from "../assets/images/featured/5.webp"
import img6 from "../assets/images/featured/6.webp"
import img7 from "../assets/images/featured/7.webp"
import img8 from "../assets/images/featured/8.webp"
import img9 from "../assets/images/featured/9.webp"
import img10 from "../assets/images/featured/10.webp"
import img11 from "../assets/images/featured/11.webp"
import img12 from "../assets/images/featured/12.webp"
import img13 from "../assets/images/featured/13.webp"
import { Button } from '@material-tailwind/react'
import { ScrollRestoration } from 'react-router-dom'

const Soccer = () => {

    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };
    return (
        <div className='mt-16'>
            <div className='relative ' style={backgroundStyle}>
                <div className='h-screen'>
                    {/* <img className='z-20 h-full w-full bg-no-repeat' src={bg2} alt="" /> */}
                    <div className='z-30 absolute top-40 left-5 lg:left-40 font-bold text-lg tracking-widest'>
                        <p className='text-[#1386fd] uppercase tracking-widest'>/supported sport</p>
                        <p className='text-7xl font-bold text-black'>Soccer</p>
                        <p className='text-xl mt-2 text-gray-800'>We are using an AI-based algorithm to predict the outcome of a match.</p>
                    </div>
                </div>

            </div>
            <div className='max-w-screen-xl mx-auto px-5 lg:px-0'>
                <p className='uppercase text-[#1386fd] tracking-widest font-semibold mt-10'>impeccable winning rate</p>
                <p className='text-5xl lg:text-7xl font-bold'>Our Return On Investment (ROI)</p>
                <p className='text-xl mt-2 text-[#627291]'>We assume 1000 bucks as initial amount. Then we invest 15% in each match (Current balance’s 15%)</p>
                <p className='text-[#596a8b] font-bold my-2 text-xl'>Formula = (Balance – (Balance×15%) ) + (Win Odds×(Balance×15%))</p>
                <p className='text-xl text-[#627291]'>If we lose, Win odds is 0. So it’s deduct from my current balance. If we win, We multiply win odds with 15% <br /> of balance. Hence, current balance amount increases.</p>
            </div>

            <div className='max-w-screen-xl mx-auto'>
                <p className='text-7xl font-semibold text-[#333333] my-10 '>Soccer ROI</p>
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
            <div>
                <p className='text-[#8f99a6] text-xs text-center mt-10 uppercase tracking-widest'>featured leagues</p>
                <div className=' max-w-screen-lg mx-auto opacity-50 grayscale'>
                    <div className='flex flex-wrap justify-center gap-5 my-16 mx-auto items-center'>
                        <div className='w-[118px] h-[48px] flex justify-center items-center'>
                            <img className='h-full ' src={img1} alt="" />
                        </div>
                        <div className='w-[118px] h-[48px] flex justify-center items-center'>
                            <img className='h-full ' src={img2} alt="" />
                        </div>
                        <div className='w-[118px] h-[48px] flex justify-center items-center'>
                            <img className='h-full ' src={img3} alt="" />
                        </div>
                        <div className='w-[118px] h-[48px] flex justify-center items-center'>
                            <img className='h-full ' src={img4} alt="" />
                        </div>
                        <div className='w-[118px] h-[48px] flex justify-center items-center'>
                            <img className='h-full ' src={img5} alt="" />
                        </div>
                        <div className='w-[118px] h-[48px] flex justify-center items-center'>
                            <img className='h-full ' src={img6} alt="" />
                        </div>
                        <div className='w-[118px] h-[48px] flex justify-center items-center'>
                            <img className='h-full ' src={img7} alt="" />
                        </div>

                    </div>
                    <div className='flex flex-wrap items-center justify-center gap-5 mb-20'>
                        <div className='w-[118px] h-[48px] flex justify-center items-center '>
                            <img className='h-full ' src={img6} alt="" />
                        </div>
                        <div className='w-[118px] h-[48px] flex justify-center items-center'>
                            <img className='h-full ' src={img8} alt="" />
                        </div>
                        <div className='w-[118px] h-[48px] flex justify-center items-center'>
                            <img className='h-full ' src={img9} alt="" />
                        </div>
                        <div className='w-[118px] h-[48px] flex justify-center items-center'>
                            <img className='h-full ' src={img10} alt="" />
                        </div>
                        <div className='w-[118px] h-[48px] flex justify-center items-center'>
                            <img className='h-full ' src={img11} alt="" />
                        </div>
                        <div className='w-[118px] h-[48px] flex justify-center items-center'>
                            <img className='h-full ' src={img12} alt="" />
                        </div>

                    </div>

                </div>
            </div>
            <div className='max-w-screen-xl mx-auto px-5 lg:px-0'>
                <p className='uppercase text-[#1386fd] tracking-widest font-semibold'>understand the forecast</p>
                <p className='text-5xl lg:text-7xl font-bold my-5'>General information</p>
                <div>
                    <p className='text-xl font-semibold'>Soccer</p>
                    <p className='text-lg text-[#687896] mt-2'>Our AI-based algorithm predict us the winner of the matches.</p>
                </div>
                <div className='my-10'>
                    <p className='text-xl font-semibold'>How can I use this?</p>
                    <p className='text-lg text-[#687896] mt-2'>How can I use the AI-based prediction platform? Its easy, simple and very secure. You sign up for the package that fits your needs. It is important that you make your choice for how much time you want to spent everyday for this AI-based winning prediction.</p>
                </div>
                <div>
                    <p className='text-xl font-semibold'>Technical predictions</p>
                    <p className='text-lg text-[#687896] mt-2'>Bet:ter Return team are using Artificial Intelligence (AI) and Machine Learning (ML), considering recent historical result data from various international leagues, and came up with several Random Forest models and Neural Network models. Clustering all the models results we came up with a winning prediction or winning forecast accuracy and we tune all the models everyday before publishing it to our members. Depend on our advice we are sure that you can full fill your needs.</p>
                </div>

                <Button className='bg-[#064cfa] rounded-none text-xs lg:px-10 lg:py-5 px-7 py-3 my-5 lg:my-10 '>14 days for free</Button>


            </div>
            <ScrollRestoration />
        </div>
    )
}

export default Soccer

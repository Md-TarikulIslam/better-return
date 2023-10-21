import React from 'react'
import { Link, ScrollRestoration } from 'react-router-dom'
import { FaAngleRight, FaServer, FaMoneyBillWave, FaMapSigns, FaAngleDown } from "react-icons/fa";
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import img1 from '../../assets/images/why/1.webp'
import img2 from '../../assets/images/why/2.webp'
import img3 from '../../assets/images/why/3.webp'
import img4 from '../../assets/images/why/4.webp'
import img5 from '../../assets/images/why/5.webp'
import gif from '../../assets/images/why/lines.gif'
import img7 from '../../assets/images/roi/1.png'
import img8 from '../../assets/images/roi/2.png'


const Why = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto'>
                <div className='flex justify-between flex-col-reverse lg:flex-row gap-8 lg:gap-0 mb-20'>
                    <div className='px-5 lg:px-0'>
                        <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#1273ff] to-[#15acf9] font-semibold tracking-widest'>WHY BET:TER RETURN?</p>
                        <p className='text-4xl lg:text-6xl my-5 font-semibold'>Winning with AI</p>
                        <p className='text-[#596a8b] w-4/5 '>With Bet:terReturn, you can take advantage of the power of
                            artificial intelligence to make informed decisions and achieve
                            success in the sports and e-sports prediction market. <br /> <br />

                            Our platform uses vast amounts of data to predict outcomes and
                            uncover valuable insights, empowering you to identify winning
                            opportunities and make smarter choices. We give you the tools
                            and information you need to succeed.</p>
                    </div>
                    <div>
                        <iframe className='rounded-lg w-[300px]  mx-auto lg:w-[560px] h-[315px]' src="https://www.youtube.com/embed/dMr_2boHaRY?si=VsAKMSKYFRtISzQf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>

                <div className=''>
                    <div className='flex lg:flex-row flex-col gap-8 lg;gap-0'>

                        <div className='flex-1'>
                            <iframe className='rounded-lg w-[300px]  mx-auto lg:w-[560px] h-[315px]' src="https://www.youtube.com/embed/Y1yDscM7pBE?si=bOK_0_sX0WMryook" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='flex-1 ml-5 lg:ml-0'>
                            <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#1273ff] to-[#15acf9] font-semibold tracking-widest'>IMPECCABLE WINNING RATE</p>
                            <p className='text-4xl lg:text-6xl my-5 font-semibold flex items-start gap-3 '>Our ROI <span className='text-lg text-orange-600'>
                                (Return On Investment)</span></p>
                            <p className='text-[#596a8b] w-4/5'>Experience unmatched success with our algorithm and AI optimization, delivering an unbeatable winning rate that provides you with the crucial advantage to thrive in the sports and e-sports prediction market. Stay with our AI-based prediction.  </p>
                        </div>
                    </div>

                    <Link to='/roi'><p className='my-8 flex items-center gap-1 text-[#064cfa] font-semibold hover:text-blue-500'>Explore Our Total ROI <FaAngleRight /> </p></Link>
                    <div className='flex w-full flex-col lg:flex-row gap-10 mx-auto my-5 px-5 lg:px-0'>
                        <div className='w-full'>
                            <div className='drop-shadow-xl'>
                                <img className='rounded-xl h-[354px] w-full transition duration-700 delay-100 ease-in-out hover:scale-110' src={img7} alt="" />
                            </div>
                            <div className='drop-shadow-xl rounded-xl min-w-full p-2 bg-white mt-10'>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' /> Invest $1000, get $1560.97 in 7 days!</p>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' /> Invest $3000, get $4682.68 in 7 days!</p>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' />
                                    Invest $5000, get $7804.85 in 7 days!</p>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='drop-shadow-xl '>
                                <img className='rounded-xl h-[354px] w-full transition duration-700 delay-100 ease-in-out hover:scale-110' src={img8} alt="" />
                            </div>
                            <div className='drop-shadow-xl rounded-xl  p-2 bg-white mt-10'>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' /> Invest $1000, get $2286.48 in 30 days!</p>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' /> Invest $3000, get $6859.45 in 30 days!</p>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' />
                                    Invest $5000, get $10547.57 in 30 days!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border rounded-lg p-6 border-dashed border-[#a7c0f9]' >
                    <div className="bg-[url('https://betterreturn.net/wp-content/uploads/2023/05/cta-banner-bg.png')] rounded-lg shadow-xl bg-cover bg-bottom ">
                        <div className='flex items-center lg:flex-row flex-col'>
                            <div className='py-16 flex-1'>
                                <p className='mx-auto border rounded-full border-gray-400  text-4xl p-4  w-16 h-16 flex items-center text-[#064dfa] my-4'><FaServer /></p>
                                <p className='text-3xl font-semibold text-center'>1. Pick a plan</p>

                                <p className='text-center w-4/5 mx-auto my-4 text-[#596a8b]'>Choose your plan and select the frequency of matches you wish to receive insights and predictions for

                                </p>
                            </div>
                            <div>
                                <FaAngleRight className='text-2xl hidden lg:block' />
                                <FaAngleDown className='text-2xl block lg:hidden' />
                            </div>
                            <div className='py-16 flex-1'>
                                <p className='mx-auto border rounded-full border-gray-400  text-4xl p-4  w-16 h-16 flex items-center text-[#064dfa] my-4'><FaMapSigns /></p>
                                <p className='text-3xl font-semibold text-center'>2. Investment guide</p>

                                <p className='text-center w-4/5 mx-auto my-4 text-[#596a8b]'>We deliver advanced guidelines to your doorstep, so all you have to do is insert your investment and relax.

                                </p>
                            </div>
                            <div>
                                <FaAngleRight className='text-2xl hidden lg:block' />
                                <FaAngleDown className='text-2xl block lg:hidden' />
                            </div>
                            <div className='py-16 flex-1'>
                                <p className='mx-auto border rounded-full border-gray-400  text-4xl p-4  w-16 h-16 flex items-center text-[#064dfa] my-4'><FaMoneyBillWave /></p>
                                <p className='text-3xl font-semibold text-center'>3. Grow your investment</p>

                                <p className='text-center w-4/5 mx-auto my-4 text-[#596a8b]'>Our platform delivers you the best analysis for your tax-free investment, resulting in a better return on investment for you

                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bg-[url('https://img.freepik.com/premium-photo/white-surface-with-reflections-smooth-minimal-light-waves-background-blurry-silk-waves-minimal-soft-grayscale-ripples-flow_236836-25487.jpg?w=2000')] rounded-lg shadow-xl bg-cover bg-center lg:px-20 lg:py-28 px-5 py-5 my-20 w-full" >
                    <div className='flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 justify-between w-full'>
                        <div className='flex-1'>
                            <div className='flex items-center gap-5'>
                                <img className='w-28 h-28 border border-purple-500 p-3 rounded-lg shadow-2xl' src={img1} alt="" />
                                <p className='text-2xl font-semibold '>Artificial intelligence</p>
                            </div>
                            <p className='text-[#596a8b]  text-lg my-5'>Bet:terReturn uses advanced AI technology to analyze sports
                                matches and uncover valuable insights. Our system
                                processes massive amounts of data to predict outcomes and
                                identify winning opportunities, empowering users to make
                                informed decisions and achieve success in the sports
                                market.</p>
                            <Link to='/sports'><p className='text-transparent bg-clip-text bg-gradient-to-r from-[#137afe] to-[#b6f2f6] font-semibold tracking-widest flex items-center gap-3 text-lg'>Explore More <FaAngleRight className='text-blue-600 text-lg' /> </p></Link>

                        </div>
                        <div className='flex-1 flex lg:justify-end justify-center'>
                            <img className='w-4/5 rounded-xl  ' src={img2} alt="" />
                        </div>
                    </div>
                </div>

                <div className="bg-[url('https://img.freepik.com/free-vector/blue-abstract-gradient-wave-vector-background_53876-111548.jpg?w=1380&t=st=1695289741~exp=1695290341~hmac=feebe50dbd8d764b1f038415250f1cf92de096378b461c92d8496e5ca62cf6db')] rounded-lg shadow-xl bg-no-repeat bg-bottom bg-cover  lg:px-20 lg:py-28 px-5 py-5 my-20" >
                    <div className='flex flex-col-reverse lg:flex-row gap-10  items-center'>

                        <div className='w-full flex-1'>
                            <div className='drop-shadow-xl'>
                                <img className='rounded-xl h-[354px]  transition duration-700 delay-100 ease-in-out hover:scale-[1.03]' src={img7} alt="" />
                            </div>
                            <div className='drop-shadow-xl rounded-xl min-w-full p-2 bg-white mt-3'>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' /> Invest $1000, get $1560.97 in 7 days!</p>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' /> Invest $3000, get $4682.68 in 7 days!</p>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' />
                                    Invest $5000, get $7804.85 in 7 days!</p>
                            </div>
                            <div className='drop-shadow-xl rounded-xl min-w-full p-2 bg-white my-3'>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' /> Invest $1000, get $1560.97 in 7 days!</p>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' /> Invest $3000, get $4682.68 in 7 days!</p>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' />
                                    Invest $5000, get $7804.85 in 7 days!</p>
                            </div>
                            <div className='drop-shadow-xl rounded-xl min-w-full p-2 bg-white '>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' /> Invest $1000, get $1560.97 in 7 days!</p>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' /> Invest $3000, get $4682.68 in 7 days!</p>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' />
                                    Invest $5000, get $7804.85 in 7 days!</p>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className='flex items-center gap-5'>
                                <img className='w-28 h-28 border border-purple-500 p-3 rounded-lg shadow-2xl' src={img3} alt="" />
                                <p className='text-2xl font-semibold '>A powerful tool</p>
                            </div>
                            <p className='text-[#596a8b]  text-lg my-5'>Bet:terReturn is a powerful AI-based analysis tool that provides valuable insights for sports enthusiasts and investors looking to make informed decisions and achieve long-term growth in   <br />
                                their investments. With our cutting-edge technology, you can gain a competitive edge in the sports market and make
                                smart, data-driven decisions.</p>
                            <Link to='/sports'><p className='text-transparent bg-clip-text bg-gradient-to-r from-[#137afe] to-[#b6f2f6] font-semibold tracking-widest flex items-center gap-3 text-lg'>Explore More <FaAngleRight className='text-blue-600 text-lg' /> </p></Link>

                        </div>
                    </div>
                </div>

                <div className="bg-[url('https://img.freepik.com/free-vector/blue-abstract-gradient-wave-vector-background_53876-111548.jpg?w=1380&t=st=1695289741~exp=1695290341~hmac=feebe50dbd8d764b1f038415250f1cf92de096378b461c92d8496e5ca62cf6db')] rounded-lg shadow-xl bg-no-repeat bg-top bg-cover  lg:px-20 lg:py-28 px-5 py-5 my-20" >
                    <div className='flex flex-col lg:flex-row gap-10  items-center'>


                        <div className='flex-1'>
                            <div className='flex items-center gap-5'>
                                <img className='w-28 h-28 border border-purple-500 p-3 rounded-lg shadow-2xl' src={img4} alt="" />
                                <p className='text-2xl font-semibold '>Improve your win rate</p>
                            </div>
                            <p className='text-[#596a8b]  text-lg my-5'>Bet:terReturn’s AI-based analysis gives you a higher win rate compared to traditional betting methods. With our accurate predictions and data-driven insights, you’ll be able to make smarter decisions and significantly improve your winning rate.</p>
                            <Link to='/sports'><p className='text-transparent bg-clip-text bg-gradient-to-r from-[#137afe] to-[#b6f2f6] font-semibold tracking-widest flex items-center gap-3 text-lg'>Explore More <FaAngleRight className='text-blue-600 text-lg' /> </p></Link>

                        </div>

                        <div className='w-full flex-1'>
                            <div className='drop-shadow-xl'>
                                <img className='rounded-xl h-[354px]  transition duration-700 delay-100 ease-in-out hover:scale-[1.03]' src={img7} alt="" />
                            </div>
                            <div className='drop-shadow-xl rounded-xl min-w-full p-2 bg-white mt-3'>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' /> Invest $1000, get $1560.97 in 7 days!</p>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' /> Invest $3000, get $4682.68 in 7 days!</p>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' />
                                    Invest $5000, get $7804.85 in 7 days!</p>
                            </div>
                            <div className='drop-shadow-xl rounded-xl min-w-full p-2 bg-white my-3'>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' /> Invest $1000, get $1560.97 in 7 days!</p>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' /> Invest $3000, get $4682.68 in 7 days!</p>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' />
                                    Invest $5000, get $7804.85 in 7 days!</p>
                            </div>
                            <div className='drop-shadow-xl rounded-xl min-w-full p-2 bg-white '>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' /> Invest $1000, get $1560.97 in 7 days!</p>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' /> Invest $3000, get $4682.68 in 7 days!</p>
                                <p className='text-md font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-4 text-[#064cfa] font-bold' />
                                    Invest $5000, get $7804.85 in 7 days!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='px-8 mb-20'>
                    <div className="relative bg-[url('https://img.freepik.com/free-vector/stylish-white-background-with-diagonal-lines_1017-33199.jpg?w=1380&t=st=1695284807~exp=1695285407~hmac=53d8b594dd3112552f9e746070ca61f7cf45a660fc2623926f866efed193fb44')] rounded-lg shadow-2xl bg-cover py-[3.4rem] px-5 lg:px-16">
                        <p className='w-3/5 lg:w-full text-xl text-[#14253c] tracking-wider font-semibold'>Try our AI-based prediction from today:</p>
                       
                       <a href="https://app.betterreturn.net/signup"> <button className='bg-[#064cfa] py-4 px-6 text-white text-xs mt-5 tracking-widest'>SIGN UP</button></a>
                        <img className='absolute  lg:-top-24 bottom-0 right-0 w-2/5 lg:w-64' src={img5} alt="" />
                    </div>
                </div>

                <div>
                    <div className='px-4 lg:px-20'>
                        <p className='border-solid border-t border-gray-300  mt-10 mb-20 '></p>
                    </div>

                    <div className='flex justify-between px-20 flex-col lg:flex-row gap-10 lg:gap-0'>


                        <div className='flex-1'>
                            <p className='bg-gradient-to-r from-[#127cfe] to-[#15a1fb] text-transparent bg-clip-text text-4xl font-medium'>72%</p>
                            <p className='border-solid border-t border-gray-300 w-20 my-3'></p>
                            <p>Successful predictions</p>
                        </div>
                        <div className='flex-1'>
                            <p className='bg-gradient-to-r from-[#127cfe] to-[#15a1fb] text-transparent bg-clip-text text-4xl font-medium'>10,000+</p>
                            <p className='border-solid border-t border-gray-300 w-20 my-3'></p>
                            <p>Predictions made</p>
                        </div>
                        <div className='flex-1'>
                            <p className='bg-gradient-to-r from-[#127cfe] to-[#15a1fb] text-transparent bg-clip-text text-4xl font-medium'>4+</p>
                            <p className='border-solid border-t border-gray-300 w-20 my-3'></p>
                            <p>Available matches every day</p>
                        </div>
                        <div className='flex-1'>
                            <p className='bg-gradient-to-r from-[#127cfe] to-[#15a1fb] text-transparent bg-clip-text text-4xl font-medium'>200+</p>
                            <p className='border-solid border-t border-gray-300 w-20 my-3'></p>
                            <p>Data points to inform the algorithm</p>
                        </div>

                    </div>

                    <div className='px-4 lg:px-20'>
                        <p className='border-solid border-t border-gray-300  mb-10 mt-20 '></p>
                    </div>
                </div>
            </div>
            <img src={gif} alt="" />
            <ScrollRestoration />
        </div>
    )
}

export default Why

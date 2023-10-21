import React from 'react'
import bg from '../assets/images/navbar/1.webp'
import bg3 from '../assets/images/navbar/2.webp'
import bg4 from '../assets/images/navbar/3.webp'
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
import { Button, Card, CardBody } from '@material-tailwind/react'
import { Link, ScrollRestoration } from 'react-router-dom'

const MoreGame = () => {

    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    };
    const backgroundStyle2 = {
        backgroundImage: `url(${bg3})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    };
    const backgroundStyle3 = {
        backgroundImage: `url(${bg4})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    };

    return (
        <div className='mt-16'>
            <div className='relative '>
                <div className='h-screen'>
                    <img className='z-20 h-full w-full bg-no-repeat' src={bg2} alt="" />
                    <div className='z-30 absolute top-40 left-5 lg:left-40 font-bold text-lg tracking-widest'>
                        <p className='text-[#1386fd] uppercase tracking-widest'>/all game</p>
                        <p className='text-6xl font-bold text-black'>Sports available for an AI-based prediction. <br />
                            Get started today.</p>
                        <p className='text-xl mt-2 text-gray-800'>Currently Offering CS: GO and Soccer</p>
                    </div>
                </div>

            </div>
            <div className='px-5 lg:px-0'>
                <Card className='max-w-screen-lg mx-auto  ' style={backgroundStyle}>
                    <CardBody className='lg:p-28'>
                        <p className='text-2xl font-semibold text-black'>Soccer</p>
                        <p className='text-lg text-black mt-5'>Our team utilizes a cutting-edge artificial intelligence algorithm to accurately predict the winner of the day. Through the power of advanced machine learning techniques, we have developed a robust system that analyzes various factors and data points to determine the most likely outcome in a given scenario. By harnessing the capabilities of artificial intelligence, we are able to provide reliable and highly accurate predictions for our clients. Our algorithm continuously learns and adapts from new data, ensuring that our predictions remain up-to-date and consistently reliable. Trust in our AI-powered solution to guide you in identifying the winning team of the day.</p>
                        <Link to='/soccer'><Button className='bg-[#064cfa] rounded-none text-xs lg:px-10 lg:py-5 px-7 py-3 mt-5 lg:mt-10 '>learn more</Button></Link>

                    </CardBody>
                </Card>
            </div>
            <div className='px-5 lg:px-0'>
                <Card className='max-w-screen-lg mx-auto  my-10' style={backgroundStyle2}>
                    <CardBody className='lg:p-28'>
                        <p className='text-2xl font-semibold text-white'>CS:GO</p>
                        <p className='text-lg text-white mt-5'>Drawing upon several years of real CS:GO game data, we have meticulously gathered and analyzed a vast amount of information. Utilizing state-of-the-art AI (artificial intelligence) technology, we have harnessed the power of advanced algorithms to predict the winner of the match cutting-edge AI techniques, enables us to provide accurate forecasts the give insights into the outcome of CS:GO matches. By leveraging this comprehensive analysis, we offer our clients the advantage of informed decision-making prior to the start of each game.</p>
                        <Link to='/cs-go'><Button className='bg-[#064cfa] rounded-none text-xs lg:px-10 lg:py-5 px-7 py-3 mt-5 lg:mt-10 '>learn more</Button></Link>

                    </CardBody>
                </Card>
            </div>
            <div className='px-5 lg:px-0'>
                <Card className='max-w-screen-lg mx-auto  mb-10' style={backgroundStyle3}>
                    <CardBody className='lg:p-28 '>
                        <p className='text-2xl font-semibold text-black'>Valorant</p>
                        <p className='text-lg text-black mt-5'>Utilizing an extensive repository of authentic Valorant game data spanning multiple years, we have undertaken a meticulous process of data collection and analysis. Employing forefront artificial intelligence (AI) technology, we have achieved the capabilities of sophisticated algorithms to anticipate match outcomes with precision, employing advanced AI techniques. This culminates in the delivery of precise prognostications that unveil valuable insights into the course of Valorant matches. Through the strategic application of this all-encompassing analysis, we present our clients with the strategic advantage of well-informed decision-making prior to the commencement of each gaming encounter.</p>
                        <Link to='/valorant'><Button className='bg-[#064cfa] rounded-none text-xs lg:px-10 lg:py-5 px-7 py-3 mt-5 lg:mt-10 '>learn more</Button></Link>

                    </CardBody>
                </Card>
            </div>
            <ScrollRestoration />
        </div>
    )
}

export default MoreGame

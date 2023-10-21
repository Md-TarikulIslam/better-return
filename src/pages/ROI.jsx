import React from 'react'
import bg from "../../src/assets/images/bg/roi.jpg"
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import img from "../assets/images/roi/1.png"
import img2 from "../assets/images/roi/2.png"
import { ScrollRestoration } from 'react-router-dom'

const ROI = () => {
    return (
        <div className='mb-60'>
            <div className="bg-[url('https://media.istockphoto.com/id/1433155192/photo/navy-blue-abstract-watercolor-pattern-background-dark-art-background-for-design.jpg?s=170667a&w=0&k=20&c=X3tRdaWK7ntbecjOwRbEYfXWPgQSopRkwg5_CLBWv6M=')] text-white mt-[31px] lg:mt-16 flex justify-center flex-col items-center  bg-no-repeat bg-cover gap-5 py-60">
                <p className='text-5xl font-bold tracking-widest text-center'>RETURN ON INVESTMENT</p>
                <p className='text-xl'>Get an overall idea!</p>
            </div>

            <div className='max-w-screen-xl mx-auto mt-20 text-[#333333]'>
                <p className=' text-5xl font-semibold  tracking-wider text-center lg:text-left'>Soccer ROI</p>
                <p className='text-center font-bold  text-xl my-20'>Week 36</p>


                <div className='flex w-full flex-col lg:flex-row gap-10 mx-auto my-5 px-5 lg:px-0'>
                    <div className='w-full'>
                        <div className='drop-shadow-xl'>
                            <img className='rounded-xl h-[354px] w-full transition duration-700 delay-100 ease-in-out hover:scale-110' src={img} alt="" />
                        </div>
                        <div className='drop-shadow-xl rounded-xl min-w-full p-2 bg-white mt-10'>
                            <p className='text-2xl font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' /> Invest $1000, get $1560.97 in 7 days!</p>
                            <p className='text-2xl font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' /> Invest $3000, get $4682.68 in 7 days!</p>
                            <p className='text-2xl font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' />
                                Invest $5000, get $7804.85 in 7 days!</p>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className='drop-shadow-xl '>
                            <img className='rounded-xl h-[354px] w-full transition duration-700 delay-100 ease-in-out hover:scale-110' src={img2} alt="" />
                        </div>
                        <div className='drop-shadow-xl rounded-xl  p-2 bg-white mt-10'>
                            <p className='text-2xl font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' /> Invest $1000, get $2286.48 in 30 days!</p>
                            <p className='text-2xl font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' /> Invest $3000, get $6859.45 in 30 days!</p>
                            <p className='text-2xl font-bold text-[#596a8b] flex gap-2 items-center tracking-wider'><ChevronRightIcon className='w-5 text-[#064cfa] font-bold' />
                                Invest $5000, get $10547.57 in 30 days!</p>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollRestoration />
        </div>
    )
}

export default ROI

import React from 'react'
import image from '../assets/images/blogs/1.webp'
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const allData = [
    {
        id: 1,
        img: image,
        title: 'Artificial Intelligence (Ai) in Sports winning forecast',
        description: "Ai algorithms for sports winning prediction have revolutionized the way we analyze and enjoy sports. These algorithms provide valuable insights, inform proper decisions, and enhance the overall fun experience.",
        link: '',
        author: 'Jinnah',
        date: 'September 30, 2023',
        tag: "AI"
    },
    {
        id: 2,
        img: image,
        title: 'Artificial Intelligence (Ai) in Sports winning forecast',
        description: "Ai algorithms for sports winning prediction have revolutionized the way we analyze and enjoy sports. These algorithms provide valuable insights, inform proper decisions, and enhance the overall fun experience.",
        link: '',
        author: 'Jinnah',
        date: 'September 30, 2023',
        tag: "AI"
    },
]

const Blogs = () => {
    return (
        <div className=' max-w-screen-xl mx-auto pb-20'>
            <p className=' text-5xl font-semibold  tracking-wider text-center lg:text-left pt-28 pb-20'>Our Blogs</p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-0'>
                {
                    allData.map((item, index) => {
                        return (
                            <div key={index} className='hover:scale-105 transition-all relative'>
                                <img className='rounded-t-lg  ' src={item.img} alt="" />
                                <p className='absolute top-4 right-4 bg-[#69727d] px-4 text-xs py-1 rounded-3xl  text-white'>{item.tag}</p>
                                <div className='bg-[#162843] p-8 rounded-b-lg'>
                                    <p className='text-white text-xl pb-4 pt-0'>{item.title}</p>
                                    <p className='text-[#7fbde9] pb-4'>{item.description}</p>
                                    <Link to={`/blog/${item.id}`}><Button className='p-0  flex items-center gap-2 text-white flex-row'>read more <FaAngleDoubleRight /></Button></Link>

                                    <p className='border-t-2 border-white mt-4'></p>
                                    <div className='flex items-center gap-3 text-xs text-white pt-4 pb-0'>
                                        <p>{item.author}</p>
                                        <p>|</p>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blogs

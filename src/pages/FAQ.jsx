import React, { useState } from 'react'
import faqData from '../static/faq'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Input,
} from "@material-tailwind/react";
import { FaFileAlt, FaSearch } from 'react-icons/fa';
import { ScrollRestoration } from 'react-router-dom';


const FAQ = () => {
    const [open, setOpen] = useState(0);
    const [openAcc1, setOpenAcc1] = useState(true);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
    function Icon({ id, open }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        );
    }
    return (
        <div className='mt-16'>
            <div className="bg-[url('https://media.istockphoto.com/id/1433155192/photo/navy-blue-abstract-watercolor-pattern-background-dark-art-background-for-design.jpg?s=170667a&w=0&k=20&c=X3tRdaWK7ntbecjOwRbEYfXWPgQSopRkwg5_CLBWv6M=')] text-white h-[400px] flex justify-center flex-col items-center  bg-no-repeat bg-cover gap-5 py-60">
                <p className='text-5xl font-bold tracking-widest text-center '>FAQ</p>
                <p className='text-xl'>Find answers to the most common questions</p>
            </div>
            <div className="max-w-screen-2xl mx-auto -mt-32 px-16 ">
                <input
                    type="text"
                    placeholder="Search..."
                    className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 h-[62px] rounded-xl w-full px-2"
                    labelProps={{
                        className: "hidden",
                    }}
                />
            </div>
            <div className='px-5 lg:px-0'>
                <div className='max-w-screen-xl mx-auto bg-white p-4 lg:p-10 rounded-2xl my-8 '>


                    {
                        faqData.map((faq, index) => {
                            return (
                                <div key={index} className='bg-white'>

                                    <Accordion open={openAcc1} className='bg-white'>
                                        <AccordionHeader className='!font-Barlow hover:text-[#777c82] text-[#777c82]'> {faq.heading}</AccordionHeader>
                                        <AccordionBody className="!font-Barlow ">
                                            {faq.questions.map((data, idx) => {
                                                return (
                                                    <div key={idx} className='ml-10'>
                                                        <Accordion open={open === data.id} icon={<Icon id={1} open={open} />}>
                                                            <AccordionHeader className='!font-Barlow text-lg bg-white' onClick={() => handleOpen(data.id)}><p className='flex items-center gap-2'> <span className='w-5 h-5'><FaFileAlt /></span> {data.question}</p></AccordionHeader>
                                                            <AccordionBody className='!font-Barlow text-black text-justify bg-white'>
                                                                {data.answer}
                                                            </AccordionBody>
                                                        </Accordion>
                                                    </div>
                                                )
                                            })}
                                        </AccordionBody>
                                    </Accordion>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <ScrollRestoration />
        </div>
    )
}

export default FAQ

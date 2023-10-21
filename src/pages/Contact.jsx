import { Input, Textarea } from '@material-tailwind/react'
import React, { useRef } from 'react'
import img from '../assets/images/contact/1.jpg'
import { ScrollRestoration } from 'react-router-dom'
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_f2xaw1r",
                "template_5cgubu4",
                form.current,
                "3e8iCSmJS5WIk0yqj"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Send Successfully! Kindly Wait For Reply");
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert("Not Successful");

                }
            );
    };
    return (
        <div className='mt-16'>
            <div className="bg-[url('https://media.istockphoto.com/id/1433155192/photo/navy-blue-abstract-watercolor-pattern-background-dark-art-background-for-design.jpg?s=170667a&w=0&k=20&c=X3tRdaWK7ntbecjOwRbEYfXWPgQSopRkwg5_CLBWv6M=')] text-white mt-[31px] lg:mt-16 flex justify-center flex-col items-center  bg-no-repeat bg-cover gap-5 py-60">
                <p className='text-3xl lg:text-5xl font-bold tracking-widest text-center max-w-screen-2xl mx-auto'>To inquire about our AI-based platform, please fill out the contact form below.</p>
                <p className='text-lg lg:text-xl'>We will get back to you as soon as possible.</p>
            </div>
            <div className='flex lg:flex-row flex-col gap-10 lg:gap-0 max-w-screen-xl mx-auto'>
                <div className='flex-1'>
                    <form ref={form} onSubmit={sendEmail}> <div className='mt-10 pl-5 pr-5 lg:pl-10 lg:pr-10'>
                        <p className='uppercase text-[10px] tracking-widest'>your name <span className='text-red-600'>*</span></p>
                        <div className="w-full">
                            <input
                                name='name'
                                required
                                type="text"
                                placeholder="Name"
                                className="!border rounded-lg px-2 w-full h-14 !border-blue-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 mt-2"
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                    </div>
                        <div className='mt-10 pl-5 pr-5 lg:pl-10 lg:pr-10'>
                            <p className='uppercase text-[10px] tracking-widest'>your email <span className='text-red-600'>*</span></p>
                            <div className="w-full">
                                <input
                                    name='email'
                                    required
                                    type="email"
                                    placeholder="Email"
                                    className="!border rounded-lg px-2 w-full h-14 !border-blue-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 mt-2"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                        </div>
                        <div className='mt-10 pl-5 pr-5 lg:pl-10 lg:pr-10'>
                            <p className='uppercase text-[10px] tracking-widest'>message </p>
                            <div className="w-full">
                                <textarea
                                    name='text'
                                    required
                                    type="text"
                                    placeholder="Write your message here..."
                                    className="!border w-full rounded-lg h-28 p-2 !border-blue-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 mt-2"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                        </div>
                        <div className='lg:pl-10 pl-5 mt-6'>
                            <button type='submit' className='text-[10px] uppercase text-white bg-[#0a4dfa] lg:px-16 px-8 py-2 lg:py-4 hover:bg-[#3871fb]'>send message</button>
                        </div></form>
                    <div className='text-left ml-5 lg:ml-0 lg:text-center mt-10'>
                        <p className='text-[#9da2ab] text-xs uppercase tracking-widest '>company information</p>
                        <p className='text-[#a2a8b2] text-lg lg:text-xl'>Better Return ApS</p>
                    </div>
                    <div className='pl-5 lg:pl-20 mt-10'>
                        <p className='text-[#a2a8b2] text-lg lg:text-xl'>Ræveholmsvej 57</p>
                        <p className='text-[#a2a8b2] text-lg lg:text-xl'>2690 Karlslunde</p>
                        <p className='text-[#a2a8b2] text-lg lg:text-xl'>Denmark</p>
                    </div>
                    <div className='pl-5 lg:pl-20 mt-10'>
                        <p className='text-[#a2a8b2] text-lg lg:text-xl'>cvr. nr. 42198412</p>
                        <p className='text-[#a2a8b2] text-lg lg:text-xl'>Email: info@betterreturn.net</p>
                    </div>

                </div>
                <div className='flex-1 h-[750px]'>
                    <img className='h-full w-full object-cover object-center' src={img} alt="" />
                </div>
            </div>
            <ScrollRestoration />
        </div>
    )
}

export default Contact

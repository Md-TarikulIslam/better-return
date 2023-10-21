import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Chip,
} from "@material-tailwind/react";
import { FaEuroSign } from 'react-icons/fa';
import { ScrollRestoration } from 'react-router-dom';

function CheckIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-3 w-3"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    );
}
const Pricing = () => {


    return (
        <div className=''>
            <div className="bg-[url('https://media.istockphoto.com/id/1433155192/photo/navy-blue-abstract-watercolor-pattern-background-dark-art-background-for-design.jpg?s=170667a&w=0&k=20&c=X3tRdaWK7ntbecjOwRbEYfXWPgQSopRkwg5_CLBWv6M=')] text-white mt-[31px] lg:mt-16 flex justify-center flex-col items-center  bg-no-repeat bg-cover gap-5 py-60 lg:h-screen">
                <div className='flex gap-10 lg:flex-row flex-col'>
                    <div>
                        <Card color="gray" variant="" className="w-full max-w-[23rem] p-6 bg-white text-black hover:bg-blue-50 hover:text-red-900 relative">
                            <Chip value="Best value" className='text-white absolute -top-4 bg-[#064dfa] px-4 py-2 shadow-md shadow-gray-800' />

                            <div
                                floated={false}
                                shadow={false}
                                color="white"
                                className="m-0  rounded-xl border-b border-white/10 py-2 text-center "
                            >
                                <Typography
                                    variant="small"
                                    color=""
                                    className="font-normal uppercase"
                                >
                                    Semiannual - billed at  143/semiannual
                                </Typography>
                                <Typography
                                    variant="h1"
                                    color=""
                                    className="mt-0 flex justify-center gap-1 text-7xl font-normal"
                                >
                                    <span className="my-3 text-4xl font-semibold text-green-500">14 days free</span>
                                </Typography>
                                <Typography className='flex items-center gap-1 justify-center'><FaEuroSign />23,83/month</Typography>
                            </div>
                            <CardBody className="p-0">
                                <ul className="flex flex-col gap-4">
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">
                                            Daily match-predictions during the week</Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">All kind of tournaments</Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">In – Depth guideline</Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">Keeps track of your investment data</Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">
                                            Platform to analyse your investment data
                                        </Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">
                                            News and Analysis
                                        </Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">
                                            You can cancel at anytime
                                        </Typography>
                                    </li>
                                </ul>
                            </CardBody>
                            <CardFooter className="mt-4 p-0">
                                <a href="https://app.betterreturn.net/signup">  <Button
                                    size="lg"

                                    className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-[#064dfa] py-3 hover:bg-black"
                                    ripple={true}
                                    fullWidth={true}
                                >
                                    try for free
                                </Button></a>
                            </CardFooter>
                        </Card>
                    </div>
                    <div>
                        <Card color="gray" variant="" className="w-full max-w-[23rem] p-6 bg-white text-black hover:bg-blue-50 hover:text-red-900">
                            <div
                                floated={false}
                                shadow={false}
                                color="white"
                                className="m-0  rounded-xl border-b border-white/10 py-2 text-center "
                            >
                                <Typography
                                    variant="small"
                                    color=""
                                    className="font-normal uppercase"
                                >
                                    Monthly
                                </Typography>
                                <Typography
                                    variant="h1"
                                    color=""
                                    className="mt-0 flex justify-center gap-1 text-7xl font-normal"
                                >
                                    <span className="my-3 text-4xl font-semibold text-green-500">14 days free</span>
                                </Typography>
                                <Typography className='flex items-center gap-1 justify-center'><FaEuroSign />  29/month</Typography>
                            </div>
                            <CardBody className="p-0">
                                <ul className="flex flex-col gap-4">
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">
                                            Daily match-predictions during the week</Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">All kind of tournaments</Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">In – Depth guideline</Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">Keeps track of your investment data</Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">
                                            Platform to analyse your investment data
                                        </Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">
                                            News and Analysis
                                        </Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">
                                            You can cancel at anytime
                                        </Typography>
                                    </li>
                                </ul>
                            </CardBody>
                            <CardFooter className="mt-4 p-0">
                                <a href="https://app.betterreturn.net/signup">  <Button
                                    size="lg"

                                    className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-[#064dfa] py-3 hover:bg-black"
                                    ripple={true}
                                    fullWidth={true}
                                >
                                    try for free
                                </Button></a>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
            <ScrollRestoration />
        </div>
    )
}

export default Pricing

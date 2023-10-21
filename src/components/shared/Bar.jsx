import React from "react";
import {
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";
import {

    RocketLaunchIcon,
    CurrencyDollarIcon,
    ReceiptRefundIcon,
    DocumentIcon,
    Bars4Icon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { HiNewspaper, HiMail, HiQuestionMarkCircle } from "react-icons/hi";

export function Bar() {
    const data = [
        {
            label: "Sports",
            value: "sports",
            icon: RocketLaunchIcon,
            link: "/more-game"
        },
        {
            label: "ROI",
            value: "roi",
            icon: ReceiptRefundIcon,
            link: "/roi"
        },
        {
            label: "Pricing",
            value: "pricing",
            icon: CurrencyDollarIcon,
            link: "https://app.betterreturn.net/payment-plans"

        },
        {
            label: "results",
            value: "results",
            icon: DocumentIcon,
            link:"https://app.betterreturn.net/feed/history"

        },

    
        {
            label: "blogs",
            value: "more",
            icon: HiNewspaper,
            link: "/blogs"

        },
        {
            label: "contact",
            value: "more",
            icon: HiMail,
            link: "/contact"

        },
        {
            label: "faq",
            value: "more",
            icon: HiQuestionMarkCircle,
            link: "/faq"

        },
    ];
    const handleClick = (value) => {
        console.log("clicked", value)
    }
    return (
        <Tabs value="dashboard" className='block lg:hidden fixed bottom-0 z-20  rounded-none w-full bg-[#121c2e] '>
            <TabsHeader className="bg-[#121c2e] mt-1"
                indicatorProps={{
                    className: "bg-[#064dfa] shadow-none ",
                }} >
                {data.map(({ label, value, icon, link }) => (
                    <Tab key={value} value={value} className="">
                        <Link to={link}> <div onClick={() => handleClick(value)} className="flex flex-col items-center  gap-2 uppercase text-xs text-white">
                            {React.createElement(icon, { className: "w-5 h-5 " })}
                            {label}
                        </div></Link>
                    </Tab>
                ))}
                {/* <p className="text-white text-[13px]"><Bars4Icon /> More </p> */}

            </TabsHeader>

        </Tabs>
    );
}
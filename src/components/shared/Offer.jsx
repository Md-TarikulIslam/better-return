import React, { useRef } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";


export default function Offer() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
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
        <>

            <p onClick={handleOpen} className='fixed bottom-96 right-0 ori bg-[#064dfa] p-2 z-50 lg:py-5 lg:px-3 rounded-l-lg  text-white font-bold'>Get 14 days free</p>
            <div className="max-w-screen-lg mx-auto ">

                <Dialog open={open} handler={handleOpen} className="fixed right-0 top-80 md:w-[30rem] bg-blue-900 bg-[url('https://www.pngkey.com/png/full/951-9515208_business-card-background-black-and-white-visiting-images.png')] bg-cover">

                    <DialogHeader className="mt-10">
                        <button
                            variant="text"
                            onClick={handleOpen}
                            className="absolute right-4 top-4 bg-white rounded-full py-1 px-3.5"
                        >
                            <span className="text-xl">X</span>
                        </button>
                        <p className="text-white text-3xl mx-auto text-center">Get The First 14 Days For Free</p></DialogHeader>
                    <DialogBody className="text-xl text-white pt-0 mb-2">
                        <p className="text-center mb-4">Receive free predictions, news, and much more </p>
                        <form ref={form} onSubmit={sendEmail} className="w-80 mx-auto">
                            <input
                                name="name"
                                required
                                type="text"
                                placeholder="First Name"
                                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded w-full h-9 px-2 text-sm"
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                            <input
                                name="email"
                                required
                                type="email"
                                placeholder="Email Address"
                                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded w-full h-9 my-6 px-2 text-sm"
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                            <Button type="submit" fullWidth className="bg-[#0a4dfa]">Unlock offer</Button>
                        </form>
                        <p className="text-xs mt-4 text-center">Read more about our <Link to='/privacy-policy'><span className="underline">Privacy Policy.</span></Link> You can unsubscribe from <br /> the newsletter at any time at no cost.</p>
                    </DialogBody>
                </Dialog>
            </div>
        </>
    );
}
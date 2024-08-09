import React from 'react';
import Link from 'next/link';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoGithub } from 'react-icons/io5';
import logo from '../../public/logoBlack.png';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="lg:h-2/5 flex items-end justify-center bg-[#F8F9FA]">
            <div className="w-full">
                <div className="w-full max-w-[85rem] pt-10 pb-6 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        <div className="col-span-full lg:col-span-1">
                            <Link href="/" className="flex items-center space-x-3 text-xl font-semibold text-black">
                                <Image src={logo} alt="Logo" className="w-10 h-10" />
                                <h2 className="text-3xl font-bold text-black">News<span className="text-blue-500">glo</span></h2>
                            </Link>
                            <div className="mt-6 flex space-x-3">
                                <Link
                                    href="#"
                                    className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black transition-all duration-500"
                                >
                                    <IoLogoFacebook className="w-6 h-6 text-black" />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black transition-all duration-500"
                                >
                                    <IoLogoInstagram className="w-6 h-6 text-black" />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black transition-all duration-500"
                                >
                                    <IoLogoTwitter className="w-6 h-6 text-black" />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black transition-all duration-500"
                                >
                                    <IoLogoGithub className="w-6 h-6 text-black" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <h4 className="font-semibold text-black">News Category</h4>
                            <div className="mt-3 grid space-y-3">
                                <p>
                                    <Link
                                        href="#"
                                        className="inline-flex gap-x-2 text-black hover:text-blue-500 transition-all"
                                    >
                                        International
                                    </Link>
                                </p>
                                <p>
                                    <Link
                                        href="#"
                                        className="inline-flex gap-x-2 text-black hover:text-blue-500 transition-all"
                                    >
                                        Politics
                                    </Link>
                                </p>
                                <p>
                                    <Link
                                        href="#"
                                        className="inline-flex gap-x-2 text-black hover:text-blue-500 transition-all"
                                    >
                                        Business
                                    </Link>
                                </p>
                                <p>
                                    <Link
                                        href="#"
                                        className="inline-flex gap-x-2 text-black hover:text-blue-500 transition-all"
                                    >
                                        Entertainment
                                    </Link>
                                </p>
                                <p>
                                    <Link
                                        href="#"
                                        className="inline-flex gap-x-2 text-black hover:text-blue-500 transition-all"
                                    >
                                        Sport
                                    </Link>
                                </p>
                                <p>
                                    <Link
                                        href="#"
                                        className="inline-flex gap-x-2 text-black hover:text-blue-500 transition-all"
                                    >
                                        Health
                                    </Link>
                                </p>
                                <p>
                                    <Link
                                        href="#"
                                        className="inline-flex gap-x-2 text-black hover:text-blue-500 transition-all"
                                    >
                                        Technology
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <h4 className="font-semibold text-black">Company</h4>
                            <div className="mt-3 grid space-y-3">
                                <p>
                                    <Link
                                        href="#"
                                        className="inline-flex gap-x-2 text-black hover:text-blue-500 transition-all"
                                    >
                                        Home
                                    </Link>
                                </p>
                                <p>
                                    <Link
                                        href="#"
                                        className="inline-flex gap-x-2 text-black hover:text-blue-500 transition-all"
                                    >
                                        About Us
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <h4 className="font-semibold text-black">Stay up to date with our news!</h4>
                            <form className="mt-10 flex flex-wrap sm:flex-nowrap max-w-md gap-3">
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    className="min-w-0 flex-auto rounded-md border-gray-300 bg-white px-3.5 py-2 text-black shadow-sm ring-0 focus:ring-0 focus:ring-inset focus:border-gray-300 sm:text-sm placeholder:text-gray-400"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-500 transition-all duration-500"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="mt-5 sm:mt-12 flex justify-center items-center">
                        <div className="flex justify-center items-center">
                            <p className="text-base font-semibold text-gray-600">
                                2024 © Newsglo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

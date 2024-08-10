import Link from 'next/link';
import React from 'react';
import logo from '../../public/logoBlack.png';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

function Navbar() {
    return (
        <div className="sticky top-0 z-50">
            <div className="navbar bg-white border-b border-[#11142D]">
                <div className="navbar-start ml-20">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            <li><Link href="/category/world">World</Link></li>
                            <li>
                                <a href="#">Parent</a>
                                <ul className="p-2">
                                    <li><Link href="/category/subcategory1">Submenu 1</Link></li>
                                    <li><Link href="/category/subcategory2">Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/category/item3">Item 3</Link></li>
                        </ul>
                    </div>
                    <Image src={logo} className="btn btn-ghost object-contain" width={70} height={70} alt="Newsglo Logo" />
                </div>
                <div className="navbar-end mr-20">
                    <div className='gap-4 hidden lg:flex'>
                        <Link href="#">
                            <button className="btn btn-sm btn-outline hover:bg-black rounded-sm">Login</button>
                        </Link>
                        <Link href="#">
                            <button className="btn btn-sm btn-outline hover:bg-black rounded-sm">Subscribe</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="navbar bg-white border-b border-[#11142D] hidden lg:flex 2xl:space-x-[510px] lg:space-x-96">
                <div className="navbar-start ml-20 flex 2xl:gap-20 lg:gap-10">
                    <Link href="/">
                        <h1 className="btn btn-ghost">Home</h1>
                    </Link>
                    <Link href="/category/world">
                        <h1 className="btn btn-ghost">World</h1>
                    </Link>
                    <Link href="/category/politics">
                        <h1 className="btn btn-ghost">Politics</h1>
                    </Link>
                    <Link href="/category/business">
                        <h1 className="btn btn-ghost">Business</h1>
                    </Link>
                    <Link href="/category/food">
                        <h1 className="btn btn-ghost">Food</h1>
                    </Link>
                    <Link href="/category/sport">
                        <h1 className="btn btn-ghost">Sport</h1>
                    </Link>
                    <Link href="/category/health">
                        <h1 className="btn btn-ghost">Health</h1>
                    </Link>
                    <Link href="/category/technology">
                        <h1 className="btn btn-ghost">Technology</h1>
                    </Link>
                </div>
                <div className="mr-20">
                    <MagnifyingGlassIcon aria-hidden="true" className="h-14 w-14 text-black btn btn-ghost " />
                </div>
            </div>
        </div>
    );
}

export default Navbar;

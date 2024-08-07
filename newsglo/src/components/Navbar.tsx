import Link from 'next/link';
import React from 'react'
import logo from '../../public/logoBlack.png'
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

function Navbar() {
    return (
        <div>
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

                            <li><Link href="#">Item 1</Link></li>
                            <li>

                                <a href="#">Parent</a>
                                <ul className="p-2">


                                    <li><a href="#">Submenu 1</a></li>
                                    <li><a href="#">Submenu 2</a></li>
                                </ul>
                            </li>

                            <li><a href="#">Item 3</a></li>
                        </ul>
                    </div>
                    <Image src={logo} className="btn btn-ghost object-contain" width={70} height={70} alt="Newsglo Logo" />
                </div>
                <div className="navbar-end mr-20">
                    <div className='gap-4 hidden lg:flex'>
                        <Link href="#">
                            <button className="btn btn-sm btn-outline">Login</button>
                        </Link>
                        <Link href="#">
                            <button className="btn btn-sm btn-outline">Subscribe</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="navbar bg-white border-b border-[#11142D] hidden lg:flex 2xl:space-x-[510px] lg:space-x-96">
                <div className="navbar-start ml-20 flex 2xl:gap-20 lg:gap-10">
                    <Link href="#">
                        <h1 className="btn btn-ghost">Home</h1>
                    </Link>
                    <Link href="#">
                        <h1 className="btn btn-ghost">International</h1>
                    </Link>
                    <Link href="#">
                        <h1 className="btn btn-ghost">Politics</h1>
                    </Link>
                    <Link href="#">
                        <h1 className="btn btn-ghost">Business</h1>
                    </Link>
                    <Link href="#">
                        <h1 className="btn btn-ghost">Entertainment</h1>
                    </Link>
                    <Link href="#">
                        <h1 className="btn btn-ghost">Sport</h1>
                    </Link>
                    <Link href="#">
                        <h1 className="btn btn-ghost">Health</h1>
                    </Link>
                    <Link href="#">
                        <h1 className="btn btn-ghost">Technology</h1>
                    </Link>
                </div>
                <div className="mr-20">
                    <MagnifyingGlassIcon aria-hidden="true" className="h-14 w-14 text-black btn btn-ghost" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
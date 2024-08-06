import Link from 'next/link';
import React from 'react'
import logo from '../../public/logoWhite.png'
import Image from 'next/image';

function Navbar() {
    return (
        <div>
            <div className="navbar bg-[#909090]">
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

                    <Image src={logo} className="btn btn-ghost object-contain" width={60} height={60} alt="Newsglo Logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li><a href="#">Item 1</a></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">


                                    <li><a href="#">Submenu 1</a></li>
                                    <li><a href="#">Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>

                        <li><a href="#">Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end mr-20">

                    <Link href="#">
                        <button className="btn h-[2rem]">Button</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
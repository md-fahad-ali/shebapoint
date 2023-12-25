import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Cross as Hamburger } from 'hamburger-react'
import styles from "@/styles/Home.module.css";

// clip-path: circle(136.4% at 96% 4%);
function Nav() {
    const [nav, setNav] = useState("");
    const [hide, setHide] = useState("scale(0)");
    const [color, setColor] = useState("black");

    const navRef = useRef();

    useEffect(() => {
        console.log(navRef.current);
    }, [])

    return (
        <div>
            <nav className="bg-transparent  ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        {/* <Image src="/asset/logo.jpeg" className={`h-8`} alt="Flowbite Logo" width={100} height={100} /> */}
                       
                            <div className='flex gap-1'>
                                <h1 className='text-red-600'>Sheba </h1>
                                <h1 className='text-white'>Point</h1>
                            </div>
                        
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span> */}
                    </Link>
                    <div className='z-[999] block md:hidden'>
                        <Hamburger color={color} onToggle={toggled => {
                            if (toggled) {
                                setColor("white");
                                setHide("scale(1)")
                                setNav("circle(141.4% at 100% 0)")
                            } else {
                                setHide("scale(1)")
                                setColor("black");
                                setNav("circle(0.4% at 100% 0)")
                            }
                        }} />
                    </div>

                    <div style={{ clipPath: nav, transform: hide }} className={`bg-red-600 z-50 w-full absolute transition-all h-full top-0 ${styles.navlink}`}>
                        <div className='flex flex-col justify-center flex-center items-center h-full gap-5'>
                            <Link className=' font-bold text-white text-5xl hover:underline' href={"#"} >Home</Link>
                            <Link className=' font-bold text-white text-5xl hover:underline' href={"#"} >Services</Link>
                            <Link className=' font-bold text-white text-5xl hover:underline' href={"#"} >Blog</Link>
                            <Link className=' font-bold text-white text-5xl hover:underline' href={"#"} >Contact</Link>
                            <Link className=' font-bold text-white text-5xl hover:underline' href={"#"} >About us</Link>
                        </div>

                    </div>
                    <div className="hidden w-full md:block md:w-auto"
                        ref={navRef}

                        id="navbar-default">
                        <ul style={{ background: "transparent" }} className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
                            <li>
                                <Link href="#" className="block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>


            </nav>

        </div>
    )
}

export default Nav
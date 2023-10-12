'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image';

export const SlideUpAndDownAnimation = {
    initial: { opacity: 0, translateY: '15px' },
    animate: {
        opacity: 1,
        translateY: '0',
        transition: {
            type: 'spring',
            mass: 0.1,
            damping: 8
        }
    },
    exit: { opacity: 0, translateY: '15px', transition: { duration: 0.2 } }
};


export function getMatchorEqual(path: string, pattern: string, exact: boolean = false): boolean {
    if (exact) {
        return path === pattern
    } else {
        return path === pattern || path.startsWith(pattern)
    }
}
function Header() {
    const path = usePathname()
    const [showDropDown, setShowDropDown] = useState(false)


    return (
        <header className=' bg-primary-color border-b-2 border-primary-color sticky   top-0 z-40 '>
            <div className=' relative'>
                <nav className='container-content py-3 lg:py-5 px-2 lg:px-0  text-white flex '>
                    <ul className='flex items-center gap-5'>
                        <li className=''>
                            <Link className={`${getMatchorEqual(path, '/', true) && 'font-bold text-lg '} flex items-center justify-center gap-1`} href="/"> 
                                <Image className=' h-8 w-8 p-0 rounded-full   bg-white aspect-square' src="/images/favicon.png" width={100} height={100} quality={100} alt='logo' />
                                 <nav className=' inline-block poppins_regular font-bold text-xs my-auto'> Six Degrees</nav>
                            </Link>
                        </li>
                    </ul>
                    <ul className='absolute transition-all duration-300 ease-in-out inset-x-0 top-[100%] lg:relative hidden lg:flex items-center  lg:justify-normal lg:flex-row gap-5 lg:self-end self-center  justify-center lg:ml-auto flex-col bg-primary-color w-full lg:w-auto '>
                        <li>
                            <Link href="/" className={`${getMatchorEqual(path, '/', true) && 'font-bold text-lg '}`}>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className={`${getMatchorEqual(path, '/about', false) && 'font-bold text-lg '}`}>About us</Link>
                        </li>
                        <li>
                            <Link href="/programs" className={`${getMatchorEqual(path, '/projects', false) && 'font-bold text-lg '}`}>
                                Programs
                            </Link>
                        </li>
                        <li className=' rounded-xl bg-primary-gray px-5 py-1 text-black'>
                            <Link href="/contact" className={`${getMatchorEqual(path, '/projects', false) && 'font-bold text-lg '}`}>
                                Contact Us
                            </Link>
                        </li>

                    </ul>
                    <AnimatePresence>

                        {showDropDown && <motion.ul
                            variants={SlideUpAndDownAnimation}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            className='absolute inset-x-0 top-[100%] lg:relative flex lg:hidden items-center  lg:justify-normal lg:flex-row gap-5 lg:self-end self-center  justify-center lg:ml-auto flex-col bg-primary-color w-full lg:w-auto py-5 lg:py-0'>
                            <li>
                                <Link onClick={() => { setShowDropDown(false) }} href="/" className={`${getMatchorEqual(path, '/', true) && 'font-bold text-lg '}`}>Home</Link>
                            </li>
                            <li>
                                <Link onClick={() => { setShowDropDown(false) }} href="/about" className={`${getMatchorEqual(path, '/about', false) && 'font-bold text-lg '}`}>About us</Link>
                            </li>
                            <li>
                                <Link onClick={() => { setShowDropDown(false) }} href="/programs" className={`${getMatchorEqual(path, '/projects', false) && 'font-bold text-lg '}`}>
                                    Programs
                                </Link>
                            </li>
                            <li className=' rounded-xl bg-primary-gray px-5 py-1 text-black'>
                                <Link onClick={() => { setShowDropDown(false) }} href="/contact" className={`${getMatchorEqual(path, '/projects', false) && 'font-bold text-lg '}`}>
                                    Contact Us
                                </Link>
                            </li>

                        </motion.ul>}
                    </AnimatePresence>
                    <svg onClick={() => setShowDropDown(!showDropDown)} className='cursor-pointer self-end ml-auto block lg:hidden w-8 aspect-square' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M7.95 11.95h32m-32 12h32m-32 12h32" /></svg>
                </nav>
            </div>

        </header>
    )
}

export default Header
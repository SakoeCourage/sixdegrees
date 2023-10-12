'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export function getMatchorEqual(path: string, pattern: string, exact: boolean = false): boolean {
    if (exact) {
        return path === pattern
    } else {
        return path === pattern || path.startsWith(pattern)
    }
}
function Header() {
    const path = usePathname()
    return (
        <header className=' bg-primary-color backdrop-blur-md border-b-2 border-primary-color sticky py-2 top-0 z-40 '>
            <nav className='container-content py-5 text-white flex '>

                <ul className='flex items-center gap-5'>
                    <li>
                        <Link className={`${getMatchorEqual(path, '/', true) && 'font-bold text-lg '}`} href="/"> LOGO</Link>
                    </li>
                </ul>
                <ul className=' flex items-center gap-5 self-end ml-auto'>
                    <li>
                        <Link href="/" className={`${getMatchorEqual(path, '/about', false) && 'font-bold text-lg '}`}>Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className={`${getMatchorEqual(path, '/about', false) && 'font-bold text-lg '}`}>About us</Link>
                    </li>
                    <li>
                        <Link href="/projects" className={`${getMatchorEqual(path, '/projects', false) && 'font-bold text-lg '}`}>
                            Programs & mgmt
                        </Link>
                    </li>
                    <li className=' rounded-xl bg-primary-gray px-5 py-1 text-black'>
                        <Link href="/projects" className={`${getMatchorEqual(path, '/projects', false) && 'font-bold text-lg '}`}>
                            Contact Us
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header
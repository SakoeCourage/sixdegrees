import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Hero() {
    return (
        <div className=' bg-primary-color/90  apply-bg-hero-image object-cover overflow-hidden '>
            <div className='bg-primary-color/95 min-h-max'>
                <section className=' relative container-content '>
                    <div className=' grid grid-cols-3 gap-5  text-white'>
                        <nav className='col-span-2 flex flex-col gap-7 pt-16'>
                            <nav className='text-6xl tracking-wider leading-tight  uppercase'>
                                <nav className=" inline-flex -translate-x-5 -translate-y-11 ">
                                    <svg className=' inline' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M14.505 5.873C10.568 8.393 8.6 11.43 8.6 14.98c0 1.105.193 1.657.577 1.657l.396-.107c.312-.12.563-.18.756-.18c1.127 0 2.07.41 2.825 1.23c.756.82 1.134 1.83 1.134 3.036c0 1.157-.41 2.14-1.225 2.947c-.816.807-1.8 1.21-2.952 1.21c-1.608 0-2.935-.66-3.98-1.983c-1.043-1.32-1.564-2.98-1.564-4.977c0-2.26.442-4.327 1.33-6.203c.89-1.875 2.244-3.57 4.068-5.085c1.824-1.514 2.988-2.272 3.492-2.272c.336 0 .612.162.828.486c.216.323.324.605.324.845l-.107.288zm12.96 0c-3.937 2.52-5.904 5.556-5.904 9.108c0 1.105.193 1.657.577 1.657l.396-.107c.312-.12.563-.18.756-.18c1.103 0 2.04.41 2.807 1.23c.77.82 1.152 1.83 1.152 3.036c0 1.157-.41 2.14-1.225 2.947c-.816.807-1.8 1.21-2.952 1.21c-1.608 0-2.935-.66-3.98-1.983c-1.043-1.32-1.564-2.98-1.564-4.977c0-2.284.448-4.37 1.35-6.256c.9-1.887 2.255-3.577 4.067-5.067C24.76 5 25.917 4.254 26.42 4.254c.337 0 .613.162.83.486c.215.324.323.606.323.846l-.108.287z" /></svg>
                                </nav>
                                Empowering Success <p className='pl-6'>Through Insightful</p>
                                <p className='pl-6 inline-block add_underline'>Consultation.</p>
                                <svg className=' inline-flex -translate-y-8 transform scale-x-[-1] ' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M14.505 5.873C10.568 8.393 8.6 11.43 8.6 14.98c0 1.105.193 1.657.577 1.657l.396-.107c.312-.12.563-.18.756-.18c1.127 0 2.07.41 2.825 1.23c.756.82 1.134 1.83 1.134 3.036c0 1.157-.41 2.14-1.225 2.947c-.816.807-1.8 1.21-2.952 1.21c-1.608 0-2.935-.66-3.98-1.983c-1.043-1.32-1.564-2.98-1.564-4.977c0-2.26.442-4.327 1.33-6.203c.89-1.875 2.244-3.57 4.068-5.085c1.824-1.514 2.988-2.272 3.492-2.272c.336 0 .612.162.828.486c.216.323.324.605.324.845l-.107.288zm12.96 0c-3.937 2.52-5.904 5.556-5.904 9.108c0 1.105.193 1.657.577 1.657l.396-.107c.312-.12.563-.18.756-.18c1.103 0 2.04.41 2.807 1.23c.77.82 1.152 1.83 1.152 3.036c0 1.157-.41 2.14-1.225 2.947c-.816.807-1.8 1.21-2.952 1.21c-1.608 0-2.935-.66-3.98-1.983c-1.043-1.32-1.564-2.98-1.564-4.977c0-2.284.448-4.37 1.35-6.256c.9-1.887 2.255-3.577 4.067-5.067C24.76 5 25.917 4.254 26.42 4.254c.337 0 .613.162.83.486c.215.324.323.606.323.846l-.108.287z" /></svg>
                            </nav>

                            <nav className=' flex flex-col gap-3 max-w-2xl px-6 py-8 '>
                                <nav className=' text-primary-gray font-semibold'>
                                    <b>Six Degrees Consultancy</b> is a full-service, cross-industry, end-to-end consulting company with registration number CS344512018.
                                    We provide comprehensive professional and management consulting, program, and project management services.
                                    The company is based in the capital city of Accra, Ghana.
                                </nav>
                                <Link href="/about" className=' px-2  text-base py-2 bg-primary-gray text-black rounded-lg    w-max flex items-center gap-2'>
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.783 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h4a.75.75 0 0 1 0 1.5h-4ZM13 3.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V5.56l-5.22 5.22a.75.75 0 0 1-1.06-1.06l5.22-5.22h-4.69a.75.75 0 0 1-.75-.75Z" /></svg>
                                </Link>
                                <nav className='font-bold text-lg grid grid-cols-3 '>
                                    <nav className='border-r border-light-gray text-left '>20+ years of experience</nav>
                                    <nav className='border-r border-light-gray text-center '><nav className=' flex items-center justify-center h-full'>100+ Projects</nav></nav>
                                    <nav className=' text-center'><nav className=' flex items-center justify-center h-full'>100+ Clients</nav></nav>
                                </nav>
                            </nav>
                        </nav>
                        <nav className='gap-3 min-h-[80vh]  '>
                            <div className=' w-full hero-image-holder  min-h-full flex items-end'>
                                <Image  quality={100} width={800} height={800} className=' min-h-[80vh] aspect-square object-cover' src="/images/homepage/consultant.png" alt='hero-image' />
                            </div>

                        </nav>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hero
import React from 'react'
import Whoweare from './Whoweare'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Six Degree - About Us '
}


function page() {

    return (
        <div className=' min-h-screen'>
            <section className=' bg-primary-color/80'>
                <div className='container-content text-primary-gray py-7'>
                    <nav className=' h-4 my-2 border-t border-l border-primary-gray'>
                    </nav>
                    <nav className=' px-4 '> About Us</nav>
                </div>
            </section>
            <Whoweare />
        </div>
    )
}

export default page
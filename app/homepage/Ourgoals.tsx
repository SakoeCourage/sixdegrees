import React from 'react'

function Inforcard({ title, icon, children ,className}: { title: string, icon: React.ReactElement, children: React.ReactNode ,className?:string}) {
    return <div className={`h-full border border-primary-color/50 shadow-sm rounded-xl  flex flex-col p-5 gap-4 justify-center bg-white  ${className}`}>
        <h1 className=' mx-auto aspect-square text-primary-color h-24 w-24'>{icon}</h1>
        <h1 className=' mx-auto text-primary-text-gray font-medium text-xl lg:text-2xl '>{title}</h1>
        <nav className='text-deeper-gray leading-relaxed text-sm lg:text-base '>{children}</nav>
    </div>
}

function Ourgoals() {
    return (
        <div className=' bg-primary-gray/60 '>
            <div className='container-content pt-10'>
                <h6 className='add_middle_underline w-max mx-auto font-normal text-primary-text-gray  text-2xl lg:text-4xl'>
                    Our Goals
                </h6>
                <section className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 px-2 gap-10'>
                    <Inforcard className=' py-10' title='Business Support' icon={<svg xmlns="http://www.w3.org/2000/svg" className=' h-full w-full ' viewBox="0 0 20 20"><path fill="currentColor" d="M6.53 4.008a4 4 0 1 1-.144 3.708a1.493 1.493 0 0 1-.884.288h-.5v.255c0 .19.072.363.19.494a.749.749 0 0 1 1.31.498a.75.75 0 0 1-.822.746a1.739 1.739 0 0 1-1.678-1.738V4.507a.5.5 0 0 1 .5-.5h2l.028.001Zm.472 2.111a3 3 0 1 0 0-.238v.238Zm-1-.257v-.855h-1v1.997h.5a.5.5 0 0 0 .5-.5v-.366a4.078 4.078 0 0 1 0-.276ZM3 13c0-1.113.903-2 2.009-2H15a2 2 0 0 1 2 2c0 1.691-.833 2.966-2.135 3.797C13.583 17.614 11.855 18 10 18c-1.855 0-3.583-.386-4.865-1.203C3.833 15.967 3 14.69 3 13Zm2.009-1C4.448 12 4 12.447 4 13c0 1.309.622 2.284 1.673 2.953C6.743 16.636 8.265 17 10 17c1.735 0 3.257-.364 4.327-1.047C15.377 15.283 16 14.31 16 13a1 1 0 0 0-1-1H5.009Z" /></svg>}>
                        <h1 className=' w-full'>
                            Provide cutting-edge business advisory, facilitation, handholding, management, and business support services to groups, organizations, and agencies.
                        </h1>
                    </Inforcard >
                    <Inforcard className=' py-10' title='Client Connections'
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className=' h-full w-full ' viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm2 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm28 2a6 6 0 1 0 0-12a6 6 0 0 0 0 12ZM22 28a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm12-16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" clipRule="evenodd" /><path d="m11 11l4 4m15-3l-2 2m6 19.5L28 26m-14 5l4-4" /></g></svg>}
                    >
                        <h1 className=' w-full'>
                            Harness the potential of our international & local communities, to serve as a hub for our clients and consultants to discover new frontiers.
                        </h1>
                    </Inforcard >
                    <Inforcard className=' py-10' title='Foster Relationships'
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className=' h-full w-full ' viewBox="0 0 32 32"> <path fill="currentColor"  d="M9 7c-3.3 0-6 2.7-6 6c0 1.984.977 3.75 2.469 4.844C2.832 19.152 1 21.864 1 25h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.137-1.832-5.848-4.469-7.156A6.006 6.006 0 0 0 29 13c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 1.984.977 3.75 2.469 4.844A8.063 8.063 0 0 0 16 21.125a8.063 8.063 0 0 0-3.469-3.281A6.006 6.006 0 0 0 15 13c0-3.3-2.7-6-6-6zm0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4zm14 0c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4z" /></svg>
                            
                        }
                    >
                        <h1 className=' w-full'>
                            Provide a medium through which meaningful personal client relationships can be cultivated with our highly experienced professionals.
                        </h1>
                    </Inforcard >
                </section>
            </div>

        </div>
    )
}

export default Ourgoals
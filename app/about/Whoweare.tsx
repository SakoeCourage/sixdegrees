import React from 'react'
import Image from 'next/image'
function Whoweare() {
    return (
        <section className='  '>
            <div className='container-content text-gray-400 py-7'>

                <h6 className='add_middle_underline mb-20 w-max mx-auto font-normal text-primary-text-gray  text-3xl lg:text-4xl'>
                    Who we are
                </h6>
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <Image placeholder='blur' blurDataURL='/images/blur.png' className=' hidden lg:block min-h-full opacity-90 object-cover' alt='about image' src='/images/aboutusimage.jpeg' quality={100} height={800} width={800} />
                    <nav>
                        <nav className='flex items-start gap-5 p-5 border-deep-gray/50 bg-gray-50/80  '>
                            <nav className=' text-primary-color/75 text-xl py-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7z" /></g></svg>
                            </nav>
                            <nav className='flex-1 px-6'>
                                <p className=' pb-6 text-deeper-gray'>
                                    <b> Six Degrees </b> Consultancy is a full-service, cross-industry, end-to-end consulting company with registration number CS344512018.  We provide comprehensive professional and management consulting, program, and project management services. The company is based in the capital city of Accra, Ghana.
                                </p>
                            </nav>
                        </nav>
                        <nav className='flex items-start gap-5 p-5 border-deep-gray/50 bg-gray-50/60  '>
                            <nav className=' text-primary-color/75 text-xl py-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7z" /></g></svg>

                            </nav>
                            <nav className='flex-1 px-6'>
                                <p className=' pb-6 text-deeper-gray'>
                                    We bring deep, functional expertise to deliver superior value for our clients across different sectors of the industry, with idea generation and evolution from concept through operation, to delivering quality and measurable value through innovative, cutting-edge, and end-to-end project management solutions.
                                </p>
                            </nav>
                        </nav>
                        <nav className='flex items-start gap-5 p-5 border-deep-gray/50 bg-gray-50/80  '>
                            <nav className=' text-primary-color/75 text-xl py-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7z" /></g></svg>

                            </nav>
                            <nav className='flex-1 px-6'>
                                <p className=' pb-6 text-deeper-gray'>
                                    To fulfill our Mission to continually create value for our customers and impact our community, <b>Six Degrees Consultancy </b> has cumulated experienced seasoned management consultants with expertise in proposal writing, operational and information systems, human resource development, services provision, training, organizational development, and capacity-building, among other top-notch services. Our expertise has been dutifully gained through engagements with important institutions including private sector organizations, NGOs, development partners, and multinationals, in Ghana, Africa, and globally.

                                </p>
                            </nav>
                        </nav>
                        <nav className='flex items-start gap-5 p-5 border-deep-gray/50 bg-gray-50/80  '>
                            <nav className=' text-primary-color/75 text-xl py-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7z" /></g></svg>

                            </nav>
                            <nav className='flex-1 px-6'>
                                <p className=' pb-6 text-deeper-gray'>
                                    Together, we present a strong crop of professionals who have successfully undertaken business development, facilitation, management, institutional strengthening, transformation, and capacity-
                                    building assignments.

                                </p>
                            </nav>
                        </nav>
                    </nav>
                </div>

            </div>
            <div className='container-content pt-10'>
                <div className=' grid grid-cols-1'>
                    <nav className='flex items-start gap-5 p-5 bg-light-blue/30 border-deep-gray/50  border-y'>
                        <nav className=' text-deep-gray text-xl py-1'>01</nav>
                        <nav className='flex-1 px-6'>
                            <h1 className=' text-deep-dark font-medium text-3xl w-max add_underline'>Value proposition</h1>
                            <p className=' py-12 text-deeper-gray leading-relaxed'>
                            Our clients are the ultimate beneficiary of all that we do. We commit to delivering peace of mind to our clients through innovation, professionalism, and collaboration. We achieve this through our dynamic, highly efficient, and result-driven team, working to international best practices. 
                            </p>
                        </nav>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Whoweare
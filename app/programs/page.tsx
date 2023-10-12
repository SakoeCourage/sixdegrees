import React from 'react'
import Image from 'next/image'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Six Degree - Programs '
}


type programParames = { imagePathUrl: string, title: string, content: string }

const programsList: programParames[] = [{
    imagePathUrl: "/images/carouselimages/c4.jpeg",
    title: "Alinea Canada - WEE-North project",
    content: "As part of the WEE-North project initiated by Global Affairs Canada, to empower approximately 2,000 young women by providing them with industrial trades training.  Six Degrees conducted a gender-sensitive workplace workshop for the Association of Ghana Industry partners in Northern Ghana. Our role involved training needs assessment, development of training contents and modules, training delivery and development of a 10-point specific recommendation for training industry partners. These recommendations covered various areas, including understanding trainees, onboarding and orientation, managing trainees, promoting a gender-friendly workplace environment, developing gender-sensitive health and safety protocols, ensuring proper sanitation and workplace facilities, supporting women's skills development through best practices, optimizing heavy equipment usability, understanding the consequences of a hostile workplace environment and implementing gender-sensitive grievance mechanisms, and addressing family concerns."

},
{
    imagePathUrl: "/images/carouselimages/c3.jpeg",
    title: "National Commission for Civic Education (NCCE)",
    content: "The Commission's mission is to foster and uphold democracy while instilling in the people of Ghana a deep understanding of their rights and responsibilities through civic education. Six Degrees provided specialized training on competency development and excellence in service delivery to administrators, janitors, security personnel, and carpenters at NCCE. The training focused on understanding the demands of high-performing organizations, how organizations function cohesively, delivering excellent customer service through work ethics, communication, teamwork, and attitude change, effective time management, factors that affect performance, maintaining hygiene and managing risk factors, practical sessions on office and restroom cleaning, discussions on work-related exposures and COVID-19 protocols, and implementing work and safety protocols while addressing hazards at the workplace. "
},
{
    imagePathUrl: "/images/carouselimages/c2.jpeg",
    title: "Center for National Distance Learning and Open Schooling (CENDLOS)",
    content: "CENDLOS ensures equal access to digital education in underserved and hard-to-reach areas.  In 2022, Six Degrees successfully designed and managed the inaugural Ghana National Digital & Distance Learning Conference. Throughout the entire process, we ensured the integration of gender and social inclusion considerations. The conference brought together over 200 stakeholders, including government officials from the Ghana Ministry of Education, heads of agencies from Ghana Education Service, and representatives from UNESCO, UNICEF, Plan International, Coursera, MTN, EdTech Hub, and various education-oriented institutions. We facilitated discussions on crucial topics such as ICT/Digital Learning Policies/Masterplans, Equity in Digital Learning, Content development for basic school, and the relevance of Open Universities in achieving SDG4. "
},
{
    imagePathUrl: "/images/carouselimages/c5.jpeg",
    title: "Vodafone Ghana Foundation",
    content: "Vodafone Ghana Foundation, the charity arm of Vodafone Ghana was launched in 2009 to support sustainable initiatives that drive social change, improve people’s lives and solve pressing social needs. The Vodafone Ghana Foundation believes that mobile communications can help address some of the world’s compelling humanitarian needs and improve living conditions in Ghana. The Vodafone Ghana Foundation also provides a formal process for charitable contributions to be made to communities, community groups, and Non-Governmental Organizations (NGOs) in Ghana that are key partners in responding to social and economic development issues in the country. As part of the February 2022, International Day for Women & Girls in STEM program, organized a STEM competition for Junior High Schools, Senior High Schools, and Tertiary Institutions in Ghana. The objective of the program is to inspire and encourage students resulting in greater confidence in their knowledge and understanding of Science, Technology, Engineering, and Mathematics in Ghana.  "
},
{
    imagePathUrl: "/images/carouselimages/c1.jpeg",
    title: "Mothers2Mothers (m2m)",
    content: " m2m is an African NGO that unlocks the potential of women to create healthy families and eliminate pediatric AIDS. m2m trains and employs local mothers living with HIV as Peer Mentors, and community healthcare workers who provide services in understaffed health clinics and communities. Since m2m was founded in 2001 in Cape Town, more than 14.5 million people have been reached with life-changing health services and support, and over 12,000 jobs have been created by m2m for women living with HIV. Six Degrees organized the philanthropy project initiation for Mothers2Mothers (m2m) in Accra, Ghana. This event was a follow-on from the Philanthropy Round Tables held in 2021. The purpose was to convene a core group of Ghana's major philanthropists and private sector partners, facilitating critical discussions on mobilizing resources as a crucial step in addressing the pressing healthcare challenges faced by mothers and families with HIV in Ghana.    "
},

]


function Reader(){

}


function Programcard(args: programParames) {
    const { title, content, imagePathUrl } = args

    return <div className='!rounded-lg overflow-hidden soft_card flex flex-col pb-2 programcard bg-white'>
        <div className='!h-[30%] overflow-hidden relative'>
            <div className="programcard_overlay absolute inset-0  z-10">
            </div>
            <Image placeholder='blur' blurDataURL='/images/blur.png' className='  h-full w-full  programcard_image aspect-video object-cover' width={500} height={500} quality={100} alt='program' src={imagePathUrl} />
        </div>
        <h1 className=' px-4 py-2 font-semibold text-lg'>{title}</h1>
        <p className='px-4 py-4 text-sm text-gray-600 '>
            {content}
        </p>
        {/* <button className=' self-end mx-auto w-max px-5 my-3  py-3 text-sm rounded-full bg-orange-700 text-primary-gray '>
                Read More
        </button> */}
    </div>
}


function page() {
    return (
        <div className=' bg-primary-gray/60'>
            <section className=' bg-primary-color/80'>
                <div className='container-content text-primary-gray py-7'>
                    <nav className=' h-4 my-2 border-t border-l border-primary-gray'>
                    </nav>
                    <nav className=' px-4'>Programs</nav>
                </div>
            </section>
            <div className=' container-content grid px-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                {programsList.map((program, i) => <Programcard key={i}
                    title={program.title}
                    imagePathUrl={program.imagePathUrl}
                    content={program.content}
                />)

                }
            </div>
        </div>
    )
}

export default page
import React from 'react'

interface Pedigree {
    title: string;
    content: string;
    icon: React.ReactElement
}

const pedigrees: Pedigree[] = [
    {
        title: "Professional Training in Project Management Essentials & Others ",
        content: "At Six Degrees, we offer Project Professional Practices training to a diverse audience, including Professionals/Consultants, Public Sector Officials, recent Graduates seeking competency enhancement, Executives, and the General Public.  This training is available through our flagship certificate program as well as stand-alone courses.  ",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className=' w-full h-full' viewBox="0 0 32 32"><path fill="currentColor" d="M16 32C7.125 32 0 24.776 0 16C0 7.125 7.125 0 16 0s16 7.125 16 16c0 8.776-7.125 16-16 16zm0-29.312c-7.328 0-13.318 5.984-13.318 13.313S8.672 29.319 16 29.319c7.328 0 13.318-5.99 13.318-13.318S23.328 2.688 16 2.688zm7.849 14.859H12.286a.927.927 0 0 1-.932-.917v-1.349c0-.521.411-.932.932-.932h11.661c.516 0 .927.417.927.932v1.339c-.099.516-.516.927-1.026.927zm-2.995-5.162H9.187a.925.925 0 0 1-.932-.917v-1.349c0-.417.417-.828.932-.828h11.661c.417 0 .828.417.828.828v1.339c0 .516-.411.927-.823.927zm-11.666 7.23h11.667c.516 0 .927.411.927.927v1.339a.928.928 0 0 1-.922.932H9.188c-.516-.104-.927-.516-.927-1.031v-1.344c-.005-.411.411-.823.927-.823z"/></svg>
    },
    {
        title: "Supports Development Partners in Project Management Services ",
        content: "At Six Degrees, we demonstrate expertise in consultancy services tailored to Ghana's Development Partners, Public and Private Sectors, showcased through our team's extensive project portfolio. Our areas of proficiency include Project Management, Strategic Alignment, Project Risk Management, MS Project, as well as Gender and Inclusion and Research consultancy  initiatives.   ",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className=' w-full h-full'viewBox="0 0 2048 2048"><path fill="currentColor" d="M1152 512H896V256h128v128h128v128zm512 1032q42 11 77 35t60 57t40 73t15 83q0 53-20 99t-55 82t-81 55t-100 20q-53 0-99-20t-82-55t-55-81t-20-100q0-43 14-83t39-73t61-57t78-35v-264h-512v264q42 11 77 35t60 57t40 73t15 83q0 53-20 99t-55 82t-81 55t-100 20q-53 0-99-20t-82-55t-55-81t-20-100q0-43 14-83t39-73t61-57t78-35v-264H384v264q42 11 77 35t60 57t40 73t15 83q0 53-20 99t-55 82t-81 55t-100 20q-53 0-99-20t-82-55t-55-81t-20-100q0-43 14-83t39-73t61-57t78-35v-392h640V891q-83-11-153-50t-122-99t-80-135t-29-159q0-93 35-174t96-143t142-96T960 0q93 0 174 35t143 96t96 142t35 175q0 83-29 158t-80 135t-121 99t-154 51v261h640v392zM640 448q0 66 25 124t68 102t102 69t125 25q66 0 124-25t101-68t69-102t26-125q0-66-25-124t-69-101t-102-69t-124-26q-66 0-124 25t-102 69t-69 102t-25 124zM448 1792q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50q0 27 10 50t27 40t41 28t50 10q27 0 50-10t40-27t28-41t10-50zm640 0q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50q0 27 10 50t27 40t41 28t50 10q27 0 50-10t40-27t28-41t10-50zm512 128q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50q0 27 10 50t27 40t41 28t50 10z"/></svg>

    },
    {
        title: "Supports Government in Public Financial Management Reforms  ",
        content: "At Six Degrees, we excel in delivering Institutional Reform Services, offering consultancy support to prominent organizations such as GIZ, KFW, Oxfam Ghana, UNDP, SECO, and various MDAs. Our projects encompass a range of initiatives, including the assessment of the Capacity Building Component within the District Development Facility and other significant reform projects. ",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className=' w-full h-full' viewBox="0 0 2048 2048"><path fill="currentColor" d="M1792 896h128v1152h-128V896zM512 1344l128-128v832H512v-704zm-256 256l128-128v576H256v-448zm512-512l128-128v1088H768v-960zm256-128l128 128v959h-128V960zm320 320l64-64v832h-128v-832l64 64zm192-192l128-128v1088h-128v-960zM0 1856l128-128v320H0v-192zM2048 256v512h-128V475l-576 575l-384-384L0 1627v-182l960-959l384 384l485-486h-293V256h512z"/></svg>

    },
    {
        title: "Strong capacity in ESP, SOPs, M&E, PPP and VFM Services  ",
        content: "At Six Degrees, we exhibit competence in External Services Provision, Monitoring and Evaluation, Public Private Partnerships and Value-For-Money Services through the provision of Consultancy Services locally and internationally, engagements involving PPPs and Outsourcing skills and expertise, Transaction Advisory and Value-for-Money Services for public and private sector Agencies.    ",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className=" w-full h-full" viewBox="0 0 32 32"><path fill="currentColor" d="M27 22v-5a2.002 2.002 0 0 0-2-2h-8v-5h3a2.002 2.002 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2h-8a2.002 2.002 0 0 0-2 2v4a2.002 2.002 0 0 0 2 2h3v5H7a2.002 2.002 0 0 0-2 2v5H2v8h8v-8H7v-5h8v5h-3v8h8v-8h-3v-5h8v5h-3v8h8v-8ZM12 4h8v4h-8ZM8 28H4v-4h4Zm10 0h-4v-4h4Zm10 0h-4v-4h4Z"/></svg>

    }
]


function Inforcard({ title, icon, children ,className}: { title: string, icon: React.ReactElement, children: React.ReactNode ,className?:string}) {
    return <div className={`h-full border border-primary-color/50 shadow-sm rounded-xl  flex flex-col p-5 gap-4 justify-center bg-white  ${className}`}>
        <h1 className=' mx-auto aspect-square text-primary-color h-16 w-16 my-6'>{icon}</h1>
        <h1 className=' mx-auto text-primary-text-gray font-medium text-2xl '>{title}</h1>
        <p className='text-deeper-gray leading-relaxed '>{children}</p>
    </div>
}

function Ourpedigree() {
    return (
        <div className='our-pedigree isolate relative '>
            <div className=' z-[-1] absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60'></div>
            <nav className=' px-3  lg:px-10 z-10'>
                <div className=' container-content translate-y-14'>
                    <p className=' text-white text-4xl leading-relaxed font-semibold'>
                        Why choose us?
                    </p>
                    <p className=' py-3 text-base text-primary-gray/70 font-normal  leading-relaxed'>
                        Six Degrees boasts a contemporary and extensive understanding of management consultancy in Ghana. As mentioned, we have acquired first-hand knowledge and understanding of the business terrain through our own experiences as an indigenous business enterprise.
                    </p>
                    <p className='py-3 text-base text-primary-gray/70 font-normal  leading-relaxed'>
                        As such, we have many real experiences to share and a significant number of lessons to impart. We bring a multi-sided perspective to all our consultancy assignments.
                    </p>
                    <p className='py-3 text-base text-primary-gray/70 font-normal  leading-relaxed'>
                        This is because, in our line of consultancy and business advisory services, we are directly engaged with our clients. As such, we can advise businesses on how they may address the diversity of challenges they may face as suppliers, service providers or B2B clients.
                    </p>
                </div>

                <nav className="py-5 grid grid-cols-1 lg:grid-cols-2 gap-5 translate-y-32 max-w-[100rem] mx-auto">
                    {pedigrees.map((p, i) => <Inforcard key={i} title={p.title} icon={p.icon}>
                        {p.content}
                    </Inforcard>)}
                </nav>
            </nav>

        </div>
    )
}

export default Ourpedigree
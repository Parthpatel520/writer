import React from 'react'
import Layout from '../components/Layout'
import SL_1 from '../assets/images/SL_1.jpg'
import home from '../assets/images/home.jpg'
import SL from '../assets/images/SL.png'
import Sd_Frame from '../assets/images/Sd_Frame.png'
import Sd_play from '../assets/images/Sd_play.png'
import Avatar from '../assets/images/Avatar.png'
import Avatar1 from '../assets/images/Avatar1.png'
import Avatar2 from '../assets/images/Avatar2.png'
import Overflow from '../assets/images/Overflow.png'
import Sd_3 from '../assets/images/sd_3.png'



export default function Details() {
    return (
        <>
            <Layout>
                <section className="mt-20 mb-8 md:mt-32 md:mb-12">
                    <div className="container max-w-[1200px] mx-auto px-4">
                        <div className="font-[Raleway]">
                            <p className="text-[18px] md:text-[20px] leading-none pb-5">New Release</p>
                            <p className="w-full font-semibold text-[28px] md:text-[48px] leading-[34px] md:leading-[56px]">
                                Working Smarter — A podcast about AI and modern work
                            </p>
                            <p className="w-full text-[14px] md:text-[20px] lg:text-[24px] leading-[21px] md:leading-[29px] opacity-70 mt-4">
                                Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare.
                                Sed at ante porta, ullamcorper massa eu, ullamcorper sapien.
                            </p>
                            <div className="flex items-center gap-3 mt-6 md:mt-10">
                                <img
                                    className="rounded-full w-[36px] md:w-[40px]"
                                    src={SL_1}
                                    alt="Author"
                                />
                                <h2 className="font-bold text-[18px] md:text-[26px] leading-[24px] md:leading-[28px] tracking-tight">
                                    Jahn Doe
                                </h2>
                            </div>
                        </div>
                        <div className="w-full mt-6 sm:mt-10 md:mt-14 lg:mt-20">
                            <img
                                className="w-full max-h-[702px] h-auto object-cover rounded-lg"
                                src={home}
                                alt="Podcast"
                            />
                        </div>
                        <div className="font-[Raleway] text-[16px] md:text-[20px] lg:text-[24px] opacity-70 leading-[28px] md:leading-[33px] text-justify text-[#02010A] mt-6 md:mt-10 space-y-6">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                            </p>
                            <p className="font-bold">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text.
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="mt-16 md:mt-20">
                    <div className="container max-w-[1200px] mx-auto px-4">
                        <div className="font-[Raleway] font-bold text-[28px] md:text-[40px] leading-tight text-[#02010A] opacity-70">
                            <p>Lorem Ipsum is simply dummy text :</p>
                        </div>
                        <div className="italic font-[Raleway] font-bold text-[20px] md:text-[30px] leading-[28px] md:leading-[37px] text-[#000] opacity-70 mt-6 md:mt-8">
                            <p>
                                “ Popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem
                                Ipsum. ”
                            </p>
                        </div>
                        <div className="w-full mt-6 md:mt-10 mb-6 md:mb-10 relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-white/0"></div>
                            <img className="w-full" src={SL} alt="Podcast" />
                            <div className="absolute bottom-4 right-6 md:bottom-8 md:right-25">
                                <img src={Sd_Frame} alt="Frame" />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <img className="w-12 md:w-[74px]" src={Sd_play} alt="Play" />
                            </div>
                        </div>
                        <div className="font-[Raleway] text-[16px] md:text-[20px] lg:text-[24px] leading-[26px] md:leading-[33px] text-[#02010A] opacity-70 mt-10 space-y-6">
                            <ol className="list-decimal ml-6 space-y-4 md:space-y-6">
                                <li>
                                    It was popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of
                                    Lorem Ipsum
                                </li>
                                <li>
                                    The release of Letraset sheets containing Lorem Ipsum passages, and
                                    more recently with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum
                                </li>
                                <li>
                                    The 1960s with the release of Letraset sheets containing
                                    <span className="font-bold">Lorem Ipsum passages,</span> and more
                                    recently with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum, It was popularised in the
                                    <span className="font-bold">1960s</span> with the release of
                                    Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum
                                </li>
                            </ol>
                            <p>
                                Lorem Ipsum is simply dummy text, “of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.”
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                            <p className="font-extrabold">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with
                                the release of Letraset sheets containing Lorem Ipsum passages, and
                                more recently with desktop publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum.
                            </p>
                            <p>
                                The printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was
                                popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem
                                Ipsum.
                            </p>
                        </div>
                        <div className="mt-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                            <a href="#">
                                <button className="w-full lg:w-auto max-w-[211px] cursor-pointer py-3 md:py-4 px-8 md:px-12 text-base md:text-xl rounded-4xl font-[Raleway] font-bold bg-[#2300C1] hover:bg-blue-950 transition-colors duration-200 ease-linear text-white">
                                    Preview
                                </button>
                            </a>
                            <div className="flex items-center gap-4 w-full lg:w-auto">
                                <div className="relative flex items-center">
                                    <img className="w-[50px] md:w-[60px] -ml-4" src={Avatar2} alt="" />
                                    <img className="w-[50px] md:w-[60px] -ml-4" src={Avatar1} alt="" />
                                    <img className="w-[50px] md:w-[60px] -ml-4" src={Avatar} alt="" />
                                    <img className="w-[50px] md:w-[60px] -ml-4 z-0" src={Overflow} alt="" />
                                </div>
                                <div className="flex-1">
                                    <input
                                        className="w-full bg-[#00000066]/40 placeholder-[#A3A3A3] placeholder-tracking-[-0.02em] placeholder:leading-[1.4] placeholder:text-[16px] placeholder:font-[Raleway] py-3 md:py-4 px-4 md:pl-[34px] border border-[#00000066]/40 rounded-4xl"
                                        type="text"
                                        placeholder="Type a Comment..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mt-[100px]'>    
                    <div className="container">
                        <div>
                            <p className='font-[Raleway] font-semibold text-[32px] md:text-[50px] leading-[120%] text-center md:text-left'>
                                Recommended&nbsp;
                                <span className='font-[Marydale] font-bold text-[#2300C1]'>Stories</span>
                            </p>
                        </div>
                        <div className='mt-[52px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                            <div className='max-w-[508px] w-full mx-auto'>
                                <div className="w-full pb-[20px] md:pb-[38px]">
                                    <img src={Sd_3} alt="" className="w-full rounded-lg" />
                                </div>
                                <div className='font-[Raleway] font-semibold text-[24px] md:text-[32px] lg:text-[38px] leading-[130%] text-[#02010A]'>
                                    <p>Figma ipsum<br /> component variant main</p>
                                </div>
                            </div>
                            <div className='max-w-[508px] w-full mx-auto'>
                                <div className="w-full pb-[20px] md:pb-[38px]">
                                    <img src={Sd_3} alt="" className="w-full rounded-lg" />
                                </div>
                                <div className='font-[Raleway] font-semibold text-[24px] md:text-[32px] lg:text-[38px] leading-[130%] text-[#02010A]'>
                                    <p>Figma ipsum<br /> component variant main</p>
                                </div>
                            </div>
                            <div className='max-w-[508px] w-full mx-auto'>
                                <div className="w-full pb-[20px] md:pb-[38px]">
                                    <img src={Sd_3} alt="" className="w-full rounded-lg" />
                                </div>
                                <div className='font-[Raleway] font-semibold text-[24px] md:text-[32px] lg:text-[38px] leading-[130%] text-[#02010A]'>
                                    <p>Figma ipsum<br /> component variant main</p>
                                </div>
                            </div>
                        </div>
                        <div className="my-[80px] md:my-[134px] flex justify-center">
                            <a href="#">
                                <button className="max-w-[269px] w-full cursor-pointer py-3 md:py-4 px-4 text-[18px] md:text-[20px] rounded-4xl font-[Raleway] font-bold leading-[100%] bg-[#2300C1] hover:bg-blue-950 transition-colors duration-200 ease-linear text-white">
                                    Back to Our Stories
                                </button>
                            </a>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}

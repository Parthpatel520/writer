import React from 'react'
import Layout from '../components/Layout'
import s4_1 from '../assets/images/s4_1.jpg'
import s4_2 from '../assets/images/s4_2.jpg'
import s4_3 from '../assets/images/s4_3.jpg'
import s4_4 from '../assets/images/s4_4.jpg'

export default function Ourblog() {
    return (
        <Layout>
            <section className="pt-10">
                <div className="container">
                    <div className="bg-[#02010A] rounded-2xl font-[Raleway] text-white text-center leading-[110%] py-10 sm:py-16 md:py-20 lg:py-[118.5px] px-6 sm:px-12 md:px-20 lg:px-[220px] xl:px-[327px]">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px]">
                            Our <span className="font-[Marydale]">Blog</span>
                        </h1>
                    </div>
                </div>
            </section>

            <section className='pb-[50px] md:pb-[100px] lg:pb-[160px] pt-10 md:pt-20'>
                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 sm:gap-x-[30px] lg:gap-x-[38px] gap-y-8 sm:gap-y-[30px] lg:gap-y-[60px]'>
                        <div className='overflow-hidden'>
                            <a href='#'>
                                <img className='w-full object-cover transition-transform duration-500 ease-in-out hover:scale-120' src={s4_1} alt="" />
                            </a>
                            <div className='pt-8 font-[Raleway]'>
                                <div className='text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-[32px] sm:leading-[38px] md:leading-[43px] mb-4'>
                                    <p>Sit amet consectetur erat sollicitudin eu.</p>
                                </div>
                                <div className='text-[16px] sm:text-[18px] md:text-[20px] leading-[100%] opacity-[70%]'>
                                    <p>Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="overflow-hidden">
                            <a href='#'>
                                <img className='w-full object-cover transition-transform duration-300 ease-in-out hover:scale-120' src={s4_2} alt="" />
                            </a>
                            <div className='pt-8 font-[Raleway]'>
                                <div className='text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-[32px] sm:leading-[38px] md:leading-[43px] mb-4'>
                                    <p>Figma ipsum component variant main</p>
                                </div>
                                <div className='text-[16px] sm:text-[18px] md:text-[20px] leading-[100%] opacity-[70%]'>
                                    <p>Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="overflow-hidden">
                            <a href='#'>
                                <img className='w-full object-cover transition-transform duration-300 ease-in-out hover:scale-120' src={s4_3} alt="" />
                            </a>
                            <div className='pt-8 font-[Raleway]'>
                                <div className='text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-[32px] sm:leading-[38px] md:leading-[43px] mb-4'>
                                    <p>Figma ipsum component variant main</p>
                                </div>
                                <div className='text-[16px] sm:text-[18px] md:text-[20px] leading-[100%] opacity-[70%]'>
                                    <p>Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="overflow-hidden">
                            <a href='#'>
                                <img className='w-full object-cover transition-transform duration-300 ease-in-out hover:scale-120' src={s4_4} alt="" />
                            </a>
                            <div className='pt-8 font-[Raleway]'>
                                <div className='text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-[32px] sm:leading-[38px] md:leading-[43px] mb-4'>
                                    <p>Figma ipsum component variant main</p>
                                </div>
                                <div className='text-[16px] sm:text-[18px] md:text-[20px] leading-[100%] opacity-[70%]'>
                                    <p>Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    )
}

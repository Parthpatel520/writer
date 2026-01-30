import React from 'react'
import Layout from '../components/Layout'
import home from '../assets/images/home.jpg'
import s4_1 from '../assets/images/s4_1.jpg'
import s4_2 from '../assets/images/s4_2.jpg'
import s4_3 from '../assets/images/s4_3.jpg'
import s4_4 from '../assets/images/s4_4.jpg'

function HomePage() {
    return (
        <>
            <Layout>
                <section className='pt-4 sm:pt-10 md:pt-14 lg:pt-[60px] pb-8 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-[132px]'>
                    <div className='container'>
                        <div className='max-w-[945px] text-[50px] sm:text-[72px] leading-[127%] font-[Raleway] font-semibold'>
                            <h1>Hey, we’re&nbsp;
                                <span className='font-[Marydale] text-[#22007c]'>Writer</span>
                                &nbsp;See our thoughts, stories and ideas.</h1>
                        </div>
                        <div className='max-w-full mt-6 sm:mt-10 md:mt-14 lg:mt-20 xl:mt-24'>
                            <img className="w-full max-h-[500px] h-full object-cover rounded-2xl" src="https://cdn.sanity.io/images/t24406rz/production/3142f19dac1e89f6fae55f3c3210c347bffb6e32-1920x1195.webp?w=1920&q=100&fit=clip&auto=format" alt="Blog Banner" />
                        </div>
                    </div>
                </section>
                <section className='mb-10 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-[172px]'>
                    <div className='container'>
                        <div className='mb-3 sm:mb-6 md:mb-10 lg:mb-16'>
                            <p className='text-[56px] leading-[100%] font-semibold font-[Raleway]'>Featured&nbsp;<span className='font-[Marydale] font-bold'>Topic</span></p>
                        </div>
                        <div className='max-w-full'>
                            <div className="flex flex-wrap gap-6">
                                <a href="#" className="group flex-1 min-w-[250px] overflow-hidden  transform transition-all duration-500 ease-in-out hover:flex-[1.7] ">
                                    <div className="overflow-hidden">
                                        <img src="https://cdn.sanity.io/images/t24406rz/production/35b1c4f41bad16e0422e50465c9de0da09bbcb54-2000x1333.webp?w=1920&q=100&fit=clip&auto=format" alt="Card 1" className="w-full h-64 sm:h-80 object-cover transform transition duration-500 ease-in-out group-hover:scale-110" />
                                    </div>
                                    <div className="p-4 transition-transform duration-500 ease-in-out group-hover:-translate-y-2" >
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                                            New technology is not good or evil in and of itself
                                        </h3>
                                        <p className="text-gray-600 line-clamp-2">
                                            Vestibulum vehicula dui venenatis neque tempor, accumsan
                                            iaculis sapien ornare.
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="group flex-1 min-w-[250px] overflow-hidden transform transition-all duration-500 ease-in-out hover:flex-[1.7] " >
                                    <div className="overflow-hidden">
                                        <span href='Figma_ipsum'>
                                            <img src="https://cdn.sanity.io/images/t24406rz/production/3b37a0171adc660da61882c0a3ab64ee01594914-784x666.png?w=784&q=100&fit=clip&auto=format" alt="Card 2" className="w-full h-64 sm:h-80 object-cover transform transition duration-500 ease-in-out group-hover:scale-110" />
                                        </span>
                                    </div>
                                    <div className="p-4 transition-transform duration-500 ease-in-out group-hover:-translate-y-2" >
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2"> Figma ipsum </h3>
                                        <p className="text-gray-600 line-clamp-2">
                                            Vestibulum vehicula dui venenatis neque tempor, accumsan
                                            iaculis sapien ornare.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mb-20 max-w-[1920px] w-full mx-auto">
                    <div className="text-white relative">
                        <section className="relative w-full grid grid-cols-1 lg:grid-cols-2">
                            <div className="absolute inset-0 lg:hidden -z-0 max-h-[700px]">
                                <img src={home} alt="Background Mobile" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/70"></div>
                            </div>
                            <div className="relative z-10 flex flex-col justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen lg:bg-black" >
                                <div className="max-w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
                                    <p className="text-xs text-gray-300 mb-2">New Release</p>
                                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug mb-3"> Working Smarter — A podcast about AI and modern work </h1>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4">Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. </p>
                                    <a href="ourstory" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 sm:px-6 py-2 rounded-full w-max text-xs sm:text-sm md:text-base" >
                                        Read More
                                    </a>
                                </div>
                            </div>
                            <div
                                className="hidden lg:block" >
                                <img src={home} alt="Abstract Background" className="w-full h-full object-cover" />
                            </div>
                        </section>
                    </div>
                </section>
                <section className='max-w-[1792px] w-full m-auto mb-[172px] px-4 sm:px-6 lg:px-8'>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                        <div className="font-[Raleway] font-semibold text-[40px] sm:text-[48px] md:text-[56px] leading-[100%] mb-6 md:mb-0">
                            <h2>
                                See what we’ve&nbsp;
                                <span className='font-[Marydale] font-bold'>Written</span>
                                &nbsp;lately
                            </h2>
                        </div>
                        <div>
                            <a href='#'>
                                <button className="cursor-pointer py-3 md:py-4 px-6 md:px-12 text-base md:text-xl rounded-full font-[Raleway] font-bold text-white bg-[#2300C1] hover:bg-blue-950 transition-colors duration-200 ease-linear">
                                    Read More
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="group transition-all duration-700 ease-in-out">
                            <a href='#'>
                                <img className='w-full  h-[333px]  group-hover:lg:h-[380px]  transition-all duration-700 ease-in-out object-cover ' src={s4_1} alt="" />
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
                        <div className="group transition-all duration-700 ease-in-out">
                            <a href='#'>
                                <img className='w-full  h-[333px]  group-hover:lg:h-[380px]  transition-all duration-700 ease-in-out object-cover ' src={s4_2} alt="" />
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
                        <div className=" group transition-all duration-700 ease-in-out">
                            <a href='#'>
                                <img className='w-full  h-[333px]  group-hover:lg:h-[380px]  transition-all duration-700 ease-in-out object-cover ' src={s4_3} alt="" />
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
                        <div className="group transition-all duration-700 ease-in-out">
                            <a href='#'>
                                <img className='w-full  h-[333px]  group-hover:lg:h-[380px]  transition-all duration-700 ease-in-out object-cover ' src={s4_4} alt="" />
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
                </section>
            </Layout>
        </>
    )
}

export default HomePage

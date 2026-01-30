import React from 'react'
import Layout from '../components/Layout'

export default function Ourstory() {
    return (
        <Layout>
            <section className='pt-10'>
                <div className='container'>
                    <div className='bg-[#02010A] rounded-2xl font-[Raleway] text-white text-center leading-[110%] py-[60px] md:py-[90px] lg:py-[118.5px] px-[30px] sm:px-[70px] md:px-[140px] lg:px-[220px] xl:px-[327px]'>
                        <h1 className='text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px]'>
                            Our <span className='font-[Marydale]'>Stories</span>
                        </h1>
                    </div>
                </div>
            </section>

            <section className="py-[50px] lg:py-[120px]">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Card 1 */}
                        <div className='relative bg-[url("https://cdn.sanity.io/images/t24406rz/production/837fa42348e9c7d430361a5e85b270e5bad31df3-882x1568.jpg")] bg-cover bg-center rounded-2xl overflow-hidden p-6 sm:p-12 md:pb-[180px] lg:pb-[260px]'>
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40"></div>

                            {/* Content */}
                            <div className="relative z-10 max-w-full lg:max-w-[518px] flex flex-col gap-3 sm:gap-6">
                                <p className="font-[Raleway] text-white font-bold text-sm sm:text-lg">Trending</p>
                                <h2 className="font-[Raleway] text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                                    Working Smarter — A podcast about AI and modern work
                                </h2>
                                <p className="font-[Raleway] text-white text-sm sm:text-base md:text-lg font-medium opacity-90">
                                    Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare.
                                    Sed at ante porta, ullamcorper massa eu, ullamcorper sapien.
                                </p>
                                <a href="#">
                                    <button className="mt-4 cursor-pointer py-3 md:py-4 px-6 md:px-12 text-sm md:text-lg rounded-full font-[Raleway] font-bold text-[#2300C1] bg-white hover:bg-[#2300C1] hover:text-white transition-colors duration-200 ease-linear">
                                        Read More
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* 🔁 Duplicate for other cards */}
                        {/* Just change background-image URL and content */}
                        <div className='relative bg-[url("https://cdn.sanity.io/images/t24406rz/production/38cfaa3c1efbf528faea9f8c6b8dd990e3511e87-1176x1568.jpg")] bg-cover bg-center rounded-2xl overflow-hidden p-6 sm:p-12 md:pb-[180px] lg:pb-[260px]'>
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative z-10 max-w-full lg:max-w-[518px] flex flex-col gap-3 sm:gap-6">
                                <p className="font-[Raleway] text-white font-bold text-sm sm:text-lg">Trending</p>
                                <h2 className="font-[Raleway] text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                                    Another cool trending story
                                </h2>
                                <p className="font-[Raleway] text-white text-sm sm:text-base md:text-lg font-medium opacity-90">
                                    Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare.
                                </p>
                                <a href="#">
                                    <button className="mt-4 cursor-pointer py-3 md:py-4 px-6 md:px-12 text-sm md:text-lg rounded-full font-[Raleway] font-bold text-[#2300C1] bg-white hover:bg-[#2300C1] hover:text-white transition-colors duration-200 ease-linear">
                                        Read More
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className='relative bg-[url("https://cdn.sanity.io/images/t24406rz/production/a44893690075cf85d938118ea8cfeaeb98d9ba52-1568x1045.jpg")] bg-cover bg-center rounded-2xl overflow-hidden p-6 sm:p-12 md:pb-[180px] lg:pb-[260px]'>
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative z-10 max-w-full lg:max-w-[518px] flex flex-col gap-3 sm:gap-6">
                                <p className="font-[Raleway] text-white font-bold text-sm sm:text-lg">Trending</p>
                                <h2 className="font-[Raleway] text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                                    Another cool trending story
                                </h2>
                                <p className="font-[Raleway] text-white text-sm sm:text-base md:text-lg font-medium opacity-90">
                                    Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare.
                                </p>
                                <a href="#">
                                    <button className="mt-4 cursor-pointer py-3 md:py-4 px-6 md:px-12 text-sm md:text-lg rounded-full font-[Raleway] font-bold text-[#2300C1] bg-white hover:bg-[#2300C1] hover:text-white transition-colors duration-200 ease-linear">
                                        Read More
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className='relative bg-[url("https://cdn.sanity.io/images/t24406rz/production/d5892f9858243066f3b0d5061089cc9a2abc4307-1568x1045.jpg")] bg-cover bg-center rounded-2xl overflow-hidden p-6 sm:p-12 md:pb-[180px] lg:pb-[260px]'>
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative z-10 max-w-full lg:max-w-[518px] flex flex-col gap-3 sm:gap-6">
                                <p className="font-[Raleway] text-white font-bold text-sm sm:text-lg">Trending</p>
                                <h2 className="font-[Raleway] text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                                    Another cool trending story
                                </h2>
                                <p className="font-[Raleway] text-white text-sm sm:text-base md:text-lg font-medium opacity-90">
                                    Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare.
                                </p>
                                <a href="#">
                                    <button className="mt-4 cursor-pointer py-3 md:py-4 px-6 md:px-12 text-sm md:text-lg rounded-full font-[Raleway] font-bold text-[#2300C1] bg-white hover:bg-[#2300C1] hover:text-white transition-colors duration-200 ease-linear">
                                        Read More
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* Add Card 3 & 4 same way... */}

                    </div>
                </div>
            </section>

        </Layout>
    )
}
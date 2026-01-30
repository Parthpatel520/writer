import React from 'react'
import footerWriter from '../assets/images/Writer.png'
import fWriter from '../assets/images/fWriter.png'


function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='pb-[60px] lg:pb-20'>
                    <div className='bg-[#22007C] pb-[30px] md:pb-[60px] lg:pb-20 xl:pb-[108px] pt-[60px] lg:pt-20 xl:pt-[108px] px-5 sm:px-[30px] md:px-10 xl:px-[104px] rounded-3xl relative'>
                        <div className='max-w-[792px] w-full flex flex-col gap-6 gap-y-[24px]'>
                            <div className=' text-white font-bold text-2xl sm:text-[40px] md:text-[50px] lg:text-[65px] xl:text-[72px] leading-[100%] xl:leading-[153.5%]'>
                                <h2>Subscribe to new&nbsp;
                                    <span className='font-[Marydale]'>posts</span>
                                </h2>
                            </div>
                            <div className='w-full flex flex-col gap-2 '>
                                <div className='w-full flex flex-col lg:flex-row gap-4 lg:gap-2 items-start lg:items-center'>
                                    <input className='font-[Raleway] max-w-[300px] sm:max-w-[440px] w-full py-2 sm:py-[12.5px] px-8 rounded-4xl border text-[20px] sm:text-lg lg:text-xl leading-[100%] text-white placeholder:text-white/40 bg-white/10' type="text" placeholder='Your email address' />
                                    <button class=" bg-white cursor-pointer py-3 md:py-4 px-8 md:px-12  md:text-xl rounded-full font-bold text-[#2300C1] hover:bg-[#2300C1] hover:text-white">View More</button>
                                </div>
                            </div>
                        </div>
                        <img className='w-[60px] sm:w-[80px] md:w-[100px] lg:w-[200px] xl:w-[328px] h-auto xl:h-[272px] absolute object-contain top-[-10px] sm:top-[-10px] lg:top-[-30px] right-[10px] sm:right-0 xl:right-[36px]' src={fWriter} alt="" />
                    </div>
                </div>

                <div className='mb-[10px] lg:mb-[62px]'>
                    <div className=' max-w-full flex flex-col sm:flex-row justify-between items-center flex-wrap gap-6'>
                        <a href='/'><img className='max-w-[147px] w-full' src={footerWriter} alt="" /></a>
                        <div>
                            <ul className='flex items-center gap-y-2 gap-4 sm:gap-6 flex-row flex-wrap justify-center'>
                                <li className='text-[20px] hover:text-blue-900'><a href='Ourblog'>Blog</a></li>
                                <li className='text-[20px] hover:text-blue-900'><a href='Privacy'>Privacy</a></li>
                                <li className='text-[20px] hover:text-blue-900'><a href='Ourstory'>Stories</a></li>
                                <li className='text-[20px] hover:text-blue-900'><a href='Ourstory'>Buy Template</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer    
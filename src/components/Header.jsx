import React from 'react'
import Writer from '../assets/images/Writer.png'

function Header() {
  return (
    <div className='py-5 sticky top-0 z-50  bg-white '>
      <div className='container'>
        <div className=' max-w-full flex justify-between items-center'>
               <a href='/'><img className='max-w-[147px] w-full' src={Writer} alt="" /></a> 
            <div className='max-w-[135px] w-full'>
              <button className='w-full py-[16px] bg-[#22007C] rounded-4xl font-bold text-[20px] leading-[120%] hover:bg-[#2300C1] text-[#FFFFFF]'>Join</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header

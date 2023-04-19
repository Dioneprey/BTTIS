import React from 'react'
import heroImg from '../assets/brain2green.png'
import { Link } from 'react-scroll';

function Hero() {
  return (
    <div className='text-white flex justify-between h-[100%]'>
      <div className='relative md:w-[100%] w-full pt-20'>
        <h1 className='font-montserrat font-bold ss:leading-[110px] xs:leading-[80px] relative z-[2] sM:text-[90px] ss:text-[70px] xs:text-[52px] text-[42px]'>
          SOLUÇÕES EM  <br /> SOFTWARES
        </h1>
        <div className='absolute z-[6] w-[30%] h-[35%] opacity-90 rounded-full top-40 white__gradient'></div>
        <div className='absolute z-[6] w-[20%] h-[30%] opacity-80 rounded-full top-40 white__gradient'></div>
        <div className='absolute z-[6] w-[20%] h-[30%] opacity-80 rounded-full top-40 white__gradient'></div>
          <button className='mt-10 p-5 hover:bg-greenCl bg-transparent border-2 border-green-500 rounded-md ease-in-out duration-500
            hover:-translate-y-[2px] ms:text-2xl ss:text-xl text-sm font-poppins'>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-50}
                ignoreCancelEvents={true}
                >
                  Nos conte sua ideia
              </Link>
              
          </button>
      </div>
      <img src={heroImg} className='transform hover:-translate-y-1 transition-all 
           duration-500 animation-duration-2s
           animate-pulseCustom absolute ms:block hidden z-5 md:top-[20%] 
           top-[15%] xl:right-[5%] lg:right-20 -right-0 w-[32%] min-w-[300px] max-w-[585px]' />
    </div>
  )
}

export default Hero
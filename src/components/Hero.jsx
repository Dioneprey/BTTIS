import React from 'react'
import heroImg from '../assets/brain2.png'

function Hero() {
  return (
    <div className='text-white flex justify-between h-[100%]'>
      <div className='relative md:w-[100%] w-full pt-20'>
        <h1 className='font-montserrat font-bold ss:leading-[110px] xs:leading-[80px] relative z-[2] sM:text-[90px] ss:text-[70px] xs:text-[52px] text-[42px]'>
          Software para <br /> órgãos públicos
        </h1>
        <p className='z-[2] text-greenCl xs:text-[28px] text-[18px] font-[400]'>Interação entre a gestão e o cidadão</p>
        <div className='absolute z-[6] w-[30%] h-[35%] opacity-90 rounded-full top-40 white__gradient'></div>
        <div className='absolute z-[6] w-[20%] h-[30%] opacity-80 rounded-full top-40 white__gradient'></div>
        <div className='absolute z-[6] w-[20%] h-[30%] opacity-80 rounded-full top-40 white__gradient'></div>
          <button className='mt-10 p-5 bg-greenCl hover:bg-transparent border-2 border-green-500 rounded-md ease-in-out duration-500 hover:-translate-y-[2px] text-2xl font-poppins'>Nos conte sua ideia</button>
      </div>
      <img src={heroImg} className='animate-pulseCustom absolute ms:block hidden z-5 md:top-[20%] top-[15%] xl:right-[5%] lg:right-20 -right-0 w-[32%] min-w-[300px] max-w-[585px]' />
    </div>
  )
}

export default Hero
import React from 'react'
import heroImg from '../assets/swengineer.svg'

function Hero() {
  return (
    <div className='text-white ms:flex justify-between row h-[100%]'>
      <div className='md:w-[40%] w-full pt-20'>
        <h1 className='lg:text-[65px] text-[52px]'>
          Software para <br /> órgãos públicos
        </h1>
        <p className='text-greenCl text-[28px] font-[400]'>Interação entre a gestão e o <br className='md:hidden block'/> cidadão</p>
        <div className='absolute z-[5] w-[30%] h-[35%] opacity-90 rounded-full top-40 white__gradient'></div>
        <div className='absolute z-[5] w-[20%] h-[30%] opacity-80 rounded-full top-40 white__gradient'></div>
        <div className='absolute z-[5] w-[20%] h-[30%] opacity-80 rounded-full top-40 white__gradient'></div>
      </div>
      <div className='flex md:w-[50%] w-full justify-end'>
        <img src={heroImg} className='relative z-15 h-[100%] bottom-10 border-hero w-[100%]' />
      </div>
    </div>
  )
}

export default Hero
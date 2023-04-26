import React from 'react'
import heroImg from '../assets/heroimg.png'
import { Link } from 'react-scroll';
import CarroselHero from './CarroselHero';

function Hero() {

  const slides = [
    'SOLUÇÕES EM  <br />SOFTWARES',
    'SOLUÇÕES PARA  <br />ORGÃOS PÚBLICOS',
    'SOLUÇÕES PARA <br />ASSESSORIA PÚBLICA'
  ]

  return (
    <div className='text-white flex justify-between h-[100%]'>
      <div className='relative md:w-[100%] w-full pt-20'>        
        <CarroselHero slides={slides}/>
        <div className='absolute z-[6] w-[60%] h-[550px] opacity-20 rounded-full -left-44 -top-20 green__gradient'></div>
        <div className='absolute z-[6] w-[30%] h-[30%] opacity-20 rounded-full -left-44 -top-20 green__gradient'></div>
        <div className='absolute z-[6] w-[50%] h-[200px] opacity-100 rounded-full -left-72 -top-32 green__gradient'></div>
          <button className='relative z-[10] mt-10 p-5 hover:bg-greenCl bg-transparent border-2 border-green-500 rounded-md ease-in-out duration-500
            hover:-translate-y-[2px] ms:text-2xl ss:text-xl text-sm font-raleway'>
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
      <img src={heroImg} className='leftToRightImg absolute ms:block hidden bottom-0 right-0 w-[100%] min-w-[300px] h-[100%]'/>
    </div>
  )
}

export default Hero
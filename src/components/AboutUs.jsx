import React from 'react'
import { Link } from 'react-scroll'
import img from '../assets/ads.png'

function AboutUs() {
  return (
    <div className='card-container font-raleway flex flex-row w-full justify-between gap-20 md:py-14 py-0'>
      <div className='flex md:flex-row flex-col-reverse flex-1  border-zinc-700'>
        <div className='md:w-[70%] w-full text-white'>
          <div className='p-2 bg-white'>
            <img src={img} alt="" />
          </div>
        </div>
        <div className='md:ml-10 ml-0 md:w-[50%] w-full'>
          <h1 className='ss:text-7xl text-5xl text-greenCl font-bold'>QUEM SOMOS?</h1>
          <p className='ss:text-xl xs:text-lg text-base mt-5 text-zinc-300 font-poppins'>
            BTTIS é uma empresa de desenvolvimento de softwares web, mobile e sites.
            Nosso objetivo é atender com qualidade e robustez os nossos clientes de forma a resolver
            seus problemas relacionados a software e processos.
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            ignoreCancelEvents={true}
          >
            <div className='mt-5 text-xl p-5 bg-transparent hover:bg-greenCl hover:-translate-y-[2px] ease-in-out duration-200 cursor-pointer rounded-lg w-[180px] text-white border-2 border-greenCl'>Saiba mais <i className="ml-2 fa-solid fa-arrow-right"></i></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
import React from 'react'
import { Link } from 'react-scroll'

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function AboutUs() {
const coffee = 'https://bttis.s3.amazonaws.com/coffee.png'

  return (
    <div className='card-container font-raleway flex flex-row w-full justify-between py-0'>
      <div className='flex lg:flex-row flex-col-reverse flex-1  border-zinc-700'>
        <div className='lg:w-[50%] w-full text-white'>
          <div className='ss:block hidden p-1 bg-[#f3f3f3] rounded-lg'>            
            <PhotoProvider>
              <PhotoView src={coffee}>
                <img src={coffee} alt="" className='rounded-lg w-full h-[450px]'/>
              </PhotoView>
            </PhotoProvider>
          </div>
        </div>
        <div className='lg:ml-10 ml-0 lg:w-[50%] w-full justify-center flex flex-col'>
          <h1 className='ss:text-6xl text-4xl text-greenCl font-bold'>QUEM SOMOS?</h1>
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
            <div className='my-5 text-xl p-5 bg-transparent hover:bg-greenCl hover:-translate-y-[2px] ease-in-out duration-200 cursor-pointer rounded-lg w-[180px] text-white border-2 border-greenCl'>Saiba mais <i className="ml-2 fa-solid fa-arrow-right"></i></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
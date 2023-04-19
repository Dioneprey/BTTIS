import React from 'react'

function AboutUs() {
  return (
    <div className='card-container font-poppins flex flex-row w-full justify-between gap-20 md:py-14 py-0'>
        <div className='flex md:flex-row flex-col-reverse flex-1  border-zinc-700'>
            <div className='md:mt-0 mt-20 md:w-[70%] w-full text-white'>
                imagem aqui
            </div>
           <div className='md:ml-10 ml-0 md:w-[50%] w-full'>
            <h1 className='ss:text-7xl text-5xl text-greenCl font-bold'>QUEM SOMOS?</h1>
                <p className='ss:text-xl xs:text-lg text-base mt-5 text-zinc-300'>
                  BTTIS é a empresa de desenvolvimento de softwares web, mobile e sites.
                  Nosso objetivo é atender com qualidade e robustez os nossos clientes de forma a resolver
                  seus problemas relacionados a software e processos.
                </p>
           </div>
        </div>
    </div>
  )
}

export default AboutUs
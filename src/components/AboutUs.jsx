import React from 'react'
import about from '../assets/about.jpg'

function AboutUs() {
  return (
    <div className='card-container font-poppins flex flex-row w-full justify-between gap-20 h-[420px]'>
        
        <div className='flex flex-row flex-1  border-zinc-700 p-10'>
            <div className='w-full text-white'>
                imagem aqui
            </div>
           <div className='ml-10'>
            <h1 className='text-7xl text-greenCl font-bold'>A BTTIS</h1>
                <p className='text-xl mt-5 text-zinc-300'>
                    Somos uma empresa de desenvolvimento de 
                    software com a função de criar sites, aplicativos e
                    sistemas em geral. <br />
                    Nossos serviços permitem transformar a internet em seu principal 
                    meio de comunicação e transparência, atendendo todo tipo de necessidade 
                    referente a sites, aplicativos, portais, contas de e-mail e software de gerenciamento.
                </p>
           </div>
        </div>
    </div>
  )
}

export default AboutUs
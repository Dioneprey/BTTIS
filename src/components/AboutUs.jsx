import React from 'react'

function AboutUs() {
  return (
    <div className='card-container font-poppins flex flex-row w-full justify-between gap-20 md:py-14 py-0'>
        
        <div className='flex md:flex-row flex-col-reverse flex-1  border-zinc-700'>
            <div className='md:mt-0 mt-20 w-full text-white'>
                imagem aqui
            </div>
           <div className='md:ml-10 ml-0'>
            <h1 className='ss:text-7xl text-5xl text-greenCl font-bold'>A BTTIS</h1>
                <p className='ss:text-xl xs:text-lg text-base mt-5 text-zinc-300'>
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
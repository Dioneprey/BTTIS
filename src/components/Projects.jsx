import React, { useState } from 'react'

function Projects() {
    const [backgroundPosition, setBackgroundPosition] = useState('0px');
    const [backgroundPosition2, setBackgroundPosition2] = useState('0px');
    const [backgroundPosition3, setBackgroundPosition3] = useState('0px');
    const [style, setStyle] = useState(false);

    const handleMouseEnter = () => {
        setBackgroundPosition('100%');
        setStyle(false)
    }
    const handleMouseLeave = () => {
        setBackgroundPosition('0px');
        setStyle(true)
    }

    const handleMouseEnter2 = () => {
        setBackgroundPosition2('100%');
        setStyle(false)
    }
    const handleMouseLeave2 = () => {
        setBackgroundPosition2('0px');
        setStyle(true)
    }

    const handleMouseEnter3 = () => {
        setBackgroundPosition3('100%');
        setStyle(false)
    }
    const handleMouseLeave3 = () => {
        setBackgroundPosition3('0px');
        setStyle(true)
    }

    return (
        <div className='font-montserrat w-full text-white'>
            <h2 className='ss:text-7xl text-5xl text-greenCl font-bold'>PROJETOS</h2>
            <p className='ss:text-xl xs:text-lg text-base mt-2 text-zinc-300 font-poppins'>Alguns dos nossos trabalhos em andamento</p>
            <div className='flex text-3xl gap-10 mt-10 justify-between'>
                <div className='flex flex-col flex-1 h-[550px] p-5 bg-[#161616] border-2 border-zinc-800 rounded-lg'>
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ backgroundPosition: `0px ${backgroundPosition}` }}
                        className={`bg-cidadao ${!style ? 'ease-in-out duration-[10s]' : 'ease-in-out duration-[3s]'} bg-cover rounded-lg flex-[1]`}
                    ></div>
                    <div className='flex-1 mt-5'>
                        <h2 className='font-bold text-greenCl'>CIDADÃO ON</h2>
                        <p className='text-lg'>
                            o aplicativo que permite aos cidadãos participar ativamente da gestão
                            pública municipal, realizando solicitações, consultando informações e
                            acompanhando os acontecimentos da sua cidade em tempo real."
                        </p>
                    </div>
                </div>
                <div className='flex flex-col flex-1 h-[550px] p-5 bg-[#161616] border-2 border-zinc-800 rounded-lg'>
                    <div
                        onMouseEnter={handleMouseEnter2}
                        onMouseLeave={handleMouseLeave2}
                        style={{ backgroundPosition: `0px ${backgroundPosition2}` }}
                        className={`bg-cidadao ${!style ? 'ease-in-out duration-[10s]' : 'ease-in-out duration-[3s]'} bg-cover h-[100px] rounded-lg flex-[1]`}
                    ></div>
                    <div className='flex-1 mt-5'>
                        <h2 className='font-bold text-greenCl '>CIS ON</h2>
                        <p className='text-lg'>Portal de gerenciamento de todo o processo de consórcio intermunicipal de saúde</p>
                    </div>
                </div>
                <div className='flex flex-col flex-1 h-[550px] p-5 bg-[#161616] border-2 border-zinc-800 rounded-lg'>
                    <div
                        onMouseEnter={handleMouseEnter3}
                        onMouseLeave={handleMouseLeave3}
                        style={{ backgroundPosition: `0px ${backgroundPosition3}` }}
                        className={`bg-cidadao ${!style ? 'ease-in-out duration-[10s]' : 'ease-in-out duration-[3s]'} bg-cover h-[100px] rounded-lg flex-[1]`}
                    ></div>
                    <div className='flex-1 mt-5'>
                        <h2 className='font-bold text-greenCl '>TR ASSESSORIA</h2>
                        <p className='text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nihil dicta deleniti saepe repellendus quae, minima, cumque corporis fugit, tenetur est consequatur sequi quas deserunt natus officiis sit aspernatur ullam.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
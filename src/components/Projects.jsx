import React, { useState } from 'react'

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

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
            <div className='flex xl:flex-row flex-col text-3xl xl:px-0 sm:px-[10%] px-0 gap-10 mt-10 justify-between'>
                <div className='flex flex-col flex-1 h-[540px] p-5 bg-[#161616] border-2 border-zinc-800 rounded-lg'>
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ backgroundPosition: `0px ${backgroundPosition}` }}
                        className={`bg-cidadao ${!style ? 'ease-in-out duration-[10s]' : 'ease-in-out duration-[3s]'} bg-cover rounded-lg xl:flex-[1] ss:h-[300px] h-[220px]`}
                    >
                        <PhotoProvider>
                            <PhotoView src='bg-cidadao'>
                                <img src='bg-cidadao' alt="" className='rounded-lg w-full h-[450px]'/>
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div className='flex-[1] mt-5'>
                        <h2 className='font-bold text-greenCl'>CIDADÃO ON</h2>
                        <p className='md:text-xl xs:text-lg text-sm'>
                            O aplicativo que permite aos cidadãos participar ativamente da gestão
                            pública municipal, realizando solicitações, consultando informações e
                            acompanhando os acontecimentos da sua cidade em tempo real.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col flex-1 h-[540px] p-5 bg-[#161616] border-2 border-zinc-800 rounded-lg'>
                    <div
                        onMouseEnter={handleMouseEnter2}
                        onMouseLeave={handleMouseLeave2}
                        style={{ backgroundPosition: `0px ${backgroundPosition2}` }}
                        className={`bg-cidadao ${!style ? 'ease-in-out duration-[10s]' : 'ease-in-out duration-[3s]'} bg-cover rounded-lg xl:flex-[1] ss:h-[300px] h-[220px]`}
                    ></div>
                    <div className='flex-1 mt-5'>
                        <h2 className='font-bold text-greenCl '>CIS ON</h2>
                        <p className='md:text-xl xs:text-lg text-sm'>Portal de gerenciamento de todo o processo de consórcio intermunicipal de saúde</p>
                    </div>
                </div>
                <div className='flex flex-col flex-1 h-[540px] p-5 bg-[#161616] border-2 border-zinc-800 rounded-lg'>
                    <div
                        onMouseEnter={handleMouseEnter3}
                        onMouseLeave={handleMouseLeave3}
                        style={{ backgroundPosition: `0px ${backgroundPosition3}` }}
                        className={`bg-cidadao ${!style ? 'ease-in-out duration-[10s]' : 'ease-in-out duration-[3s]'} bg-cover rounded-lg xl:flex-[1] ss:h-[300px] h-[220px]`}
                    ></div>
                    <div className='flex-1 mt-5'>
                        <h2 className='font-bold text-greenCl '>TR ASSESSORIA</h2>
                        <p className='md:text-xl xs:text-lg text-sm'>Totem para calcular e exibir dados offlines e integrado a API em eventos.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
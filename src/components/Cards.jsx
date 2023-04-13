import React, { useState } from 'react'

function Cards() {
    const [hover, setHover] = useState(false);

    const Card = (props) => {
        return (
            <div className='card-container'>
                <div 
                className='hover:bg-[#161616] bg-[#1f1f1f] hover-border box-shadow hover:-translate-y-[1px] border rounded-xl border-zinc-700 p-5 max-w-[400px] min-h-[350px]'
                >
                    <div className='lg:px-10 px-1'>
                        <h2 className='text-white text-center text-2xl'>{props.title}</h2>
                        <div className={`hover-bg h-[1px] bg-zinc-700 my-2`}></div>
                        <p className='text-zinc-400'>
                            {props.body}
                        </p>
                    </div>
                </div>
            </div>
            
        )
    }
  return (
    <div className='flex ms:flex-row flex-col gap-10 w-full py-12 items-center'>
        <Card 
        
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            title="Quem somos?" 
            body="BTTIS é uma empresa de desenvolvimento de 
            software com a função de criar sites, aplciativos e
            sitemas em geral"
        />        
        <Card 
            title="Quem somos?" 
            body="BTTIS é uma empresa de desenvolvimento de 
            software com a função de criar sites, aplciativos e
            sitemas em geral"
        />        
        <Card 
            title="Quem somos?" 
            body="BTTIS é uma empresa de desenvolvimento de 
            software com a função de criar sites, aplciativos e
            sitemas em geral"
        />        
    </div>
  )
}

export default Cards
import React from 'react'

function Cards() {


    const Card = (props) => {
        return (
            <div className='hover:bg-[#1f1f1f] hover:border-greenCl box-shadow hover:-translate-y-[1px] border rounded-xl flex-1 border-zinc-700 p-5 h-[300px]'>
                <div className='px-10'>
                    <h2 className='text-white text-center text-2xl'>{props.title}</h2>
                    <div className='h-[1px] bg-zinc-700 my-2'></div>
                    <p className='text-zinc-400'>
                        {props.body}
                    </p>
                </div>
            </div>
            
        )
    }
  return (
    <div className='flex w-full gap-40'>
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
        <Card 
            title="Quem somos?" 
            body="BTTIS é uma empresa de desenvolvimento de 
            software com a função de criar sites, aplciativos e
            sitemas em geral"
        />        
    </div>
  )
}

<style>

</style>
export default Cards
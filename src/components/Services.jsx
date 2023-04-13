import React from 'react'

function Services() {

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
    <div className='w-full'>
        <div>
            <h2 className='text-greenCl text-center text-7xl font-bold'>Serviços</h2>
            <div className='mt-14 flex ms:flex-row flex-col gap-10 w-full py-12 items-center'>       
              <Card 
                title="Serviços" 
                body="Nosso parceiro nos fornece um servidor próprio, com sistema VPS 
                que é robusto, seguro, eficiente, resultando em um melhor desempenho 
                para o site do Órgão Público. Além disso, possui uma capacidade de armazenamento 
                suficiente e uptime de 99,9%"
              /> 
              <Card 
                title="Serviços" 
                body="Nosso parceiro nos fornece um servidor próprio, com sistema VPS 
                que é robusto, seguro, eficiente, resultando em um melhor desempenho 
                para o site do Órgão Público. Além disso, possui uma capacidade de armazenamento 
                suficiente e uptime de 99,9%"
              /> 
              <Card 
                title="Serviços" 
                body="Nosso parceiro nos fornece um servidor próprio, com sistema VPS 
                que é robusto, seguro, eficiente, resultando em um melhor desempenho 
                para o site do Órgão Público. Além disso, possui uma capacidade de armazenamento 
                suficiente e uptime de 99,9%"
              /> 
            </div>
        </div>
    </div>
  )
}

export default Services
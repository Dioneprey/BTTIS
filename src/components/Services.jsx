import React from 'react'

function Services() {

  const Card = (props) => {
    return (
      <div className='card-container'>
        <div
          className='hover:bg-[#161616] bg-[#1f1f1f] hover-border hover:-translate-y-[1px] border rounded-xl border-zinc-700 py-5 max-w-[400px] min-h-[350px]'
        >
          <div className='lg:px-10 px-1'>
            <span className='text-greenCl text-2xl'><i className="fa-solid fa-display"></i></span>
            <h2 className='text-white text-3xl mt-2 mb-5'>{props.title}</h2>
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
        <h2 className='divAnimate text-greenCl text-center ss:text-7xl text-5xl font-bold'>Serviços</h2>
        <div className='leftToRight flex ms:flex-row justify-center flex-col gap-10 w-full py-12 items-center'>
          <div className="w-full lg:w-1/2 md:w-1 sm:w-full">
            <Card
              icon="icon3"
              title="Título"
              body="Nosso parceiro nos fornece um servidor próprio, com sistema VPS que é robusto, seguro, eficiente, resultando em um melhor desempenho para o site do Órgão Público. Além disso, possui uma capacidade de armazenamento suficiente e uptime de 99,9%"
            />
          </div>
          <div className="w-full lg:w-1/2 md:w-1 sm:w-full">
            <Card
              icon="icon3"
              title="Título"
              body="Nosso parceiro nos fornece um servidor próprio, com sistema VPS que é robusto, seguro, eficiente, resultando em um melhor desempenho para o site do Órgão Público. Além disso, possui uma capacidade de armazenamento suficiente e uptime de 99,9%"
            />
          </div>
          <div className="w-full lg:w-1/2 md:w-1 sm:w-full">
            <Card
              icon="icon3"
              title="Título"
              body="Nosso parceiro nos fornece um servidor próprio, com sistema VPS que é robusto, seguro, eficiente, resultando em um melhor desempenho para o site do Órgão Público. Além disso, possui uma capacidade de armazenamento suficiente e uptime de 99,9%"
            />
          </div>
          <div className="w-full lg:w-1/2 md:w-1 sm:w-full">
            <Card
              icon="icon3"
              title="Título"
              body="Nosso parceiro nos fornece um servidor próprio, com sistema VPS que é robusto, seguro, eficiente, resultando em um melhor desempenho para o site do Órgão Público. Além disso, possui uma capacidade de armazenamento suficiente e uptime de 99,9%"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
import React from 'react'

function Services() {

  const Card = (props) => {
    return (
      <div className='card-container'>
        <div
          className='hover:bg-[#161616] bg-[#1f1f1f] hover-border hover:-translate-y-[1px] border rounded-xl border-zinc-700 py-5 lg:max-w-[400px] lg:min-w-[350px] max-w-[400px] min-w-[400px] min-h-[400px]'
        >
          <div className='lg:px-10 px-5'>
            <span className='text-[25px]'>{props.icon}</span>
            <h2 className='text-white text-[22px] mt-2 mb-5'>{props.title}</h2>
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
        <h2 className='font-raleway divAnimate text-greenCl text-center ss:text-7xl text-5xl font-bold'>SERVIÇOS</h2>
        <div className='leftToRight flex lg:flex-row justify-center flex-col gap-10 w-full py-12 items-center'>
          <Card
            icon={[<i className="text-greenCl fa-solid fa-building-columns"></i>]}
            title="Prefeituras"
            body="Software que integra todas as secretarias do município e entrega maior fluidez nos processos eliminando filas, gastos com papéis e entregando transparência para os cidadãos. Tudo isto com um app intuitivo que todos os cidadãos poderão utilizar em qualquer plataforma."
          />

          <Card
            icon={[<i className="text-greenCl fa-solid fa-hospital"></i>]}
            title="Consórcios Intermunicipais de Saúde"
            body="Sistema para gerenciar todo o processo que elimina as filas, gastos com papéis e integra o município e as clinícas conveniadas. Simplicidade e intuitividade para que tanto os funcionários, quanto os pacientes possam ter acesso a um app moderno."
          />

          <Card
            icon={[<i className="text-greenCl fa-solid fa-display"></i>]}
            title="E muito mais"
            body="Em produção, tente novamente mais tarde"
          />

        </div>
      </div>
    </div>
  )
}

export default Services
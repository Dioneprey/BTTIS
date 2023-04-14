import React from 'react'
import logo from '../assets/Logotipo.png'

function Footer() {
  return (
    <div className='border-t border-zinc-700'>
        <div className='text-white flex justify-between'>
            <div className='my-5'>
              <img src={logo} alt="Logo BTTIS" className='w-[120px]' />
              <p className='mt-5'>BTTIS - Soluções em Software</p>
            </div>
            <div>
              <p className='mt-5'>Serviços</p>
            </div>
            <div>
              <p className='mt-5'>Links</p>
            </div>
            <div>
              <p className='mt-5'>Contatos</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
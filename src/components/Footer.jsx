import React from 'react'
import logo from '../assets/Logotipo.png'
import ContactList from './ContactList'

function Footer() {
  return (
    <div className='border-t border-zinc-700 py-5 '>
      <div className=' text-white flex ms:flex-row flex-col ms:justify-between'>
        <div className='items-start my-5'>
          <img src={logo} alt="Logo BTTIS" className='w-[120px]' />
          <p className='mt-5'>BTTIS - Soluções em Software</p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='mb-5'>Serviços</p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='mb-5'>Links</p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='mb-5'>Contato</p>
          <ContactList style={`text-sm`} />
        </div>
      </div>
    </div>
  )
}
//leftToRight
export default Footer
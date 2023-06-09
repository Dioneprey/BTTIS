import React from 'react'
import logo from '../assets/Logotipo.png'
import ContactList from './ContactList'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <div className='border-t border-zinc-700 py-5 '>
      <div className=' text-white flex ms:flex-row flex-col ms:justify-center ms:gap-56'>
        <div className='items-start my-5'>
          <img src={logo} alt="Logo BTTIS" className='w-[120px]' />
          <p className='mt-5'>BTTIS - Soluções em Software</p>
          <ul className='flex mt-2'>
            <a href="https://www.facebook.com/profile.php?id=100089142422759" target='_blank'><li className="cursor-pointer mr-3 text-xl hover:-translate-y-[0px]"><i className="ease-in-out duration-200 hover:-translate-y-[2px] hover:text-greenCl fa-brands fa-facebook-f"></i></li></a>
            <a href=""> <li className="cursor-pointer mr-3 text-xl hover:-translate-y-[0px]"><i className="ease-in-out duration-200 hover:-translate-y-[2px] hover:text-greenCl fa-brands fa-whatsapp"></i></li></a>
            <a href="https://www.instagram.com/bttistech/" target='_blank'><li className="cursor-pointer mr-3 text-xl hover:-translate-y-[0px]"><i className="ease-in-out duration-200 hover:-translate-y-[2px] hover:text-greenCl fa-brands fa-instagram"></i></li></a>
            <a href="https://www.linkedin.com/in/bttis-tech-95078225b/" target='_blank'>            <li className="cursor-pointer mr-3 text-xl hover:-translate-y-[0px]"><i className="ease-in-out duration-200 hover:-translate-y-[2px] hover:text-greenCl fa-brands fa-linkedin-in"></i></li></a>
          </ul>
        </div>
        <div className='flex flex-col items-center'>
          <p className=' text-xl'>Links</p>
          <ul className="flex my-5 flex-col ms:text-left text-center">
            <li className='cursor-pointer ease-in-out duration-200 hover:-translate-y-[2px] hover:text-greenCl'>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-50}
                ignoreCancelEvents={true}
              >
                Início
              </Link>
            </li>
            <li className='cursor-pointer ease-in-out duration-200 hover:-translate-y-[2px] hover:text-greenCl'>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-50}
                ignoreCancelEvents={true}
              >
                Serviços
              </Link>
            </li>
            <li className='cursor-pointer ease-in-out duration-200 hover:-translate-y-[2px] hover:text-greenCl'>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-50}
                ignoreCancelEvents={true}
              >
                Sobre nós
              </Link>
            </li>
            <li className='cursor-pointer ease-in-out duration-200 hover:-translate-y-[2px] hover:text-greenCl'>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-50}
                ignoreCancelEvents={true}
              >
                Fale Conosco
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center ms:mt-0 mt-10'>
          <p className='mb-5 text-xl'>Contato</p>
          <ContactList style={`text-sm`} />
        </div>
      </div>
    </div>
  )
}
//leftToRight
export default Footer
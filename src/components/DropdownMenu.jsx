import React from 'react'
import { Link } from 'react-scroll';

function DropdownMenu(props) {

    const styleLi = `py-3 px-2 border-b border-l-[3px] border-transparent hover:border-l-greenCl hover:bg-[#0f0f0f]`

    return (
        <div className={`sidebarMenu ${props.style} box-drop bg-[#161616] w-[250px] h-[100vh] absolute top-0 right-0`}>
            <ul className='mt-14'>
                <li className={`${styleLi}`}>
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
                <li className={`${styleLi}`}>
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
                <li className={`${styleLi}`}>
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
                <li className={`${styleLi}`}>
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
                <div className='mt-5'>
                    <ul className='flex justify-center'>
                        <li className={`liCss ss:hidden block text-xl hover:-translate-y-[0px]`}><i className="ease-in-out duration-200 hover:-translate-y-[2px] hover:text-greenCl fa-brands fa-instagram"></i></li>
                        <li className={`liCss ss:hidden block text-xl hover:-translate-y-[0px]`}><i className="ease-in-out duration-200 hover:-translate-y-[2px] hover:text-greenCl fa-brands fa-linkedin-in"></i></li>
                    </ul>
                </div>
                <li className={`mx-5 mt-5 xs:hidden flex justify-center text-center hover:text-white py-3 text-[16px] border-2 ease-in-out duration-500  border-greenCl hover:bg-greenCl rounded-md`}>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        ignoreCancelEvents={true}
                    >
                        Entre em contato
                    </Link>
                </li>

            </ul>
        </div>


    )
}

export default DropdownMenu
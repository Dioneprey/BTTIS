import { useEffect, useState } from "react";
import logo from "../assets/Logotipo2.png";
import styles from "../styles";

const NavBar = props => {
    const [navBg, setNavBg] = useState(false);

    const changeNavBg = () => {
        window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
          window.removeEventListener('scroll', changeNavBg);
        }
    }, [])

    return (
        <nav onScroll={changeNavBg} className={`w-full z-50 fixed flex ease-in-out duration-200 ${navBg ? 'py-3 bg-secondary' : 'py-10 '} xl:px-[10%] lG:px-44 md:px-20 px-5 items-center justify-between text-white`}>
            <div className="flex" >
                <img src={logo} alt="Logo BTTIS" className='w-[110px] h-[30px] mr-10'/>
                <ul className="list-none sM:flex hidden items-center flex-1">
                    <li>A BTTIS</li>
                    <li>Serviços</li>
                    <li>dsd</li>
                    <li className="m-0">Lorem lipsum</li>
                </ul>
            </div>
            <div className="flex">
                <ul className="list-none flex items-center flex-">
                    <li className="xs:block hidden text-xl"><i class="fa-brands fa-instagram"></i></li>
                    <li className="xs:block hidden text-xl"><i class="fa-brands fa-linkedin-in"></i></li>
                    <li className={`m-0 px-5 xs:block hidden ss:text-[16px] text-[12px] border-2 ease-in-out duration-500 ${navBg ? 'py-2' : 'py-3'} border-greenCl rounded-md`}>Entre em contato</li>
                    <li className="ml-5 text-2xl sM:hidden text-zinc-300"><i class="fa-solid fa-bars"></i></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
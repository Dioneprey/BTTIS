import { useEffect, useState } from "react";
import logo from "../assets/Logotipo2.png";
import { Link } from 'react-scroll';
import DropdownMenu from "./DropdownMenu";
import styles from "../styles";

const NavBar = props => {
    const [navBg, setNavBg] = useState(false);
    const [floatButton, setFloatButton] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const changeNavBg = () => {
        window.scrollY >= 10 ? setNavBg(true) : setNavBg(false);
        window.scrollY >= 300 ? setFloatButton(true) : setFloatButton(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
            window.removeEventListener('scroll', changeNavBg);
        }
    }, [])

    function handleDropdown() {
        setDropdown(!dropdown)
    }

    return (
        <nav onScroll={changeNavBg} className={`w-full z-50 fixed flex ease-in-out duration-200 ${navBg ? 'py-3 bg-secondary' : 'py-10 '} ${styles.paddingX} items-center justify-between text-white`}>
            <>
                {
                    floatButton ?
                        <div className={`fixed cursor-pointer hover:text-xl hover:-translate-y-2 
                                ease-linear duration-200 z-[800] right-10 top-[90%] bg-[#0f1014] border border-zinc-700 
                                w-[70px] h-[70px] rounded-full text-white flex 
                                justify-center items-center`}>
                            <Link
                                to="home"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                ignoreCancelEvents={true}
                            >
                                <i className="fa-solid fa-arrow-up"></i>
                            </Link>

                        </div> : ""
                }
            </>
            <div className="flex" >
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    ignoreCancelEvents={true}
                >
                    <img src={logo} alt="Logo BTTIS" className='cursor-pointer w-[110px] h-[30px] mr-10' />
                </Link>
                <ul className="list-none sM:flex hidden items-center flex-1">
                    <li className="liCss">
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
                    <li className="liCss">
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
                    <li className="liCss">
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
                    <li className="liCss">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-50}
                            ignoreCancelEvents={true}
                        >
                            Projetos
                        </Link>
                    </li>
                    <li className="liCss">
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
            <div className="flex">
                <ul className="list-none flex items-center flex-">
                    <a href="https://www.facebook.com/profile.php?id=100089142422759" target='_blank'><li className="liCss ss:block hidden text-xl hover:-translate-y-[0px]"><i className="ease-in-out duration-200 hover:-translate-y-[2px] hover:text-greenCl fa-brands fa-facebook-f"></i></li></a>
                    <a href=""> <li className="liCss ss:block hidden text-xl hover:-translate-y-[0px]"><i className="ease-in-out duration-200 hover:-translate-y-[2px] hover:text-greenCl fa-brands fa-whatsapp"></i></li></a>
                    <a href="https://www.instagram.com/bttistech/" target='_blank'><li className="liCss ss:block hidden text-xl hover:-translate-y-[0px]"><i className="ease-in-out duration-200 hover:-translate-y-[2px] hover:text-greenCl fa-brands fa-instagram"></i></li></a>
                    <a href="https://www.linkedin.com/in/bttis-tech-95078225b/" target='_blank'><li className="liCss ss:block hidden text-xl hover:-translate-y-[0px]"><i className="ease-in-out duration-200 hover:-translate-y-[2px] hover:text-greenCl fa-brands fa-linkedin-in"></i></li></a>

                    <li className={`liCss hover:text-white m-0 px-5 xs:block hidden ss:text-[16px] text-[12px] border-2 ease-in-out duration-500 ${navBg ? 'py-2' : 'py-3'} border-greenCl hover:bg-greenCl rounded-md`}>
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
                    <li className="liCss ml-5 text-2xl sM:hidden text-zinc-300">
                        <i
                            onClick={() => setDropdown(!dropdown)}
                            className="fa-solid fa-bars"></i>
                    </li>
                    <div className="sM:hidden">
                        <div>
                            <div className={`ease-in-out duration-200 ${dropdown ? 'translate-x-0' : 'translate-x-52'} z-50 top-5 right-2 absolute text-white`}>
                                <i
                                    onClick={() => setDropdown(!dropdown)}
                                    className="cursor-pointer liCss text-2xl fa-solid fa-xmark"></i>
                            </div>
                            <DropdownMenu closeDropdown={handleDropdown} style={dropdown ? "animate" : ""} />
                        </div>

                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Maps from "./components/Maps";
import Footer from "./components/Footer";
import Particle from "./components/Particle";
import styles from "./styles";
import { useEffect } from "react";

const App = () => {
  

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {          
            entry.target.classList.add('animate');
        }
      });
    };
    const handleXIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {          
            entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
    const observerX = new IntersectionObserver(handleXIntersection, { threshold: 0.2 });

    const divContent = document.querySelectorAll('.divAnimate');
    const divXContent = document.querySelectorAll('.leftToRight');

    divContent.forEach(elemento => {
      observer.observe(elemento);
    });
    divXContent.forEach(elemento => {
      observerX.observe(elemento);
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div className="select-none w-full h-full overflow-x-hidden font-roboto">
      <Particle />
        <div className="w-full">
          <div>
            <NavBar />
            <div id="home" className={`ms:h-[720px] ss:h-[550px] xs:h-[480px] h-[460px] relative w-full ${styles.paddingX} ms:pt-[120px] pt-[40px] ease-in-out duration-500`}>              
              <Hero />
            </div>
            <div id="services" className={`relative xl:px-[12%] px-5 ${styles.paddingY} bg-primary w-full`}>
              <div className="">
                <Services />
              </div>
            </div>
            <div id="about" className={`relative ${styles.paddingX} ${styles.paddingY} h-[540px] bg-card-pattern bg-no-repeat bg-cover w-full`}>
              <div className="divAnimate">
                <AboutUs />
              </div>
            </div>
            <div id="contact" className={`relative ${styles.paddingX} ${styles.paddingY} bg-secondary w-full`}>
              <div className="divAnimate">
                <Contact />
              </div>
            </div>
            <div id="contact" className={`relative grayscale bg-secondary w-full`}>
              <div className="divAnimate">
                <Maps />
              </div>
            </div>
            <div className={`relative ${styles.paddingX} bg-secondary w-full`}>
                <Footer />
            </div>
          </div>
        </div> 

      
      
    </div>
  )
}

export default App
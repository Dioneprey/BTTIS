import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Particle from "./components/Particle";
import styles from "./styles";

const App = () => {
  return (
    <div className="select-none w-full h-full overflow-x-hidden font-roboto">
      <Particle />
        <div className="w-full">
          <div>
            <NavBar />
            <div className={`ms:h-[720px] h-[550px] relative w-full ${styles.paddingX} ms:pt-[120px] pt-[80px] ease-in-out duration-500`}>              
              <Hero />
            </div>
            <div className={`relative ${styles.paddingX} ${styles.paddingY} bg-card-pattern bg-no-repeat bg-cover w-full`}>
              <AboutUs />
            </div>
            <div className={`relative ${styles.paddingX} ${styles.paddingY} bg-primary w-full p-80`}>
              <Services />
            </div>
          </div>
        </div> 

      
      
    </div>
  )
}

export default App
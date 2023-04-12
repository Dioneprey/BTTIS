import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Particle from "./components/Particle";
import styles from "./styles";

const App = () => {
  return (
    <div className="w-full h-full overflow-x-hidden font-roboto">
      <Particle />
        <div className="w-full">
          <div>
            <NavBar />
            <div className={`h-[720px] relative w-full ${styles.paddingX} pt-[120px] ease-in-out duration-500`}>              
              <Hero />
            </div>
            <div className={`relative ${styles.paddingX} ${styles.paddingY} bg-secondary w-full`}>
              <Cards />
            </div>
            <div className={`relative ${styles.paddingX} ${styles.paddingY} bg-zinc-300 w-full p-80`}>
              dsd
            </div>
          </div>
        </div> 

      
      
    </div>
  )
}

export default App
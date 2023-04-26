import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function CarroselHero({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);  
  
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, [currentIndex]); 
    

    return (
      <div className="carrossel relative z-[50] h-[220px]">
        <TransitionGroup className="slide-container">
          <CSSTransition key={currentIndex} timeout={500} classNames="slide">
            <div onClick={() => nextSlide()} className="slide cursor-pointer font-raleway font-bold ss:leading-[95px] xs:leading-[80px] relative z-[10] sM:text-[90px] ss:text-[70px] xs:text-[52px] text-[37px]"
                style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: slides[currentIndex] }}></div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
}


export default CarroselHero
import { useEffect, useRef } from 'react';

import logo1 from '../assets/img/logo-app1.png';
import logo2 from '../assets/img/logo-app2.png';
import logo3 from '../assets/img/logo-app3.png';
import logo4 from '../assets/img/logo-app4.png';
import logo5 from '../assets/img/logo-app5.png';
import logo6 from '../assets/img/logo-app6.png';
import logo7 from '../assets/img/logo-app7.png';
import logo8 from '../assets/img/logo-app8.png';
import logo9 from '../assets/img/logo-app9.png';
import logo10 from '../assets/img/logo-app10.png';
import logo11 from '../assets/img/logo-app11.png';

const Acceuil = () => {
  const acceuilRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.9 // When 10% of the element is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        const images = entry.target.querySelectorAll('.layer');
        images.forEach(image => {
          setTimeout(() => {
            if (entry.isIntersecting) {
              image.classList.remove('hide');
            } else {
              image.classList.add('hide');
            }
          }, 100); // Ajoutez un léger délai avant d'ajouter ou de retirer la classe
        });
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (acceuilRef.current) {
      observer.observe(acceuilRef.current);
    }

    return () => {
      if (acceuilRef.current) {
        observer.unobserve(acceuilRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    document.querySelectorAll(".layer").forEach((layer) => {
      const speed = layer.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  return (
    <div className="P-ac" ref={acceuilRef} onMouseMove={handleMouseMove}>
      <img src={logo1} data-speed="-5" alt="" className='layer'/>
      <img src={logo2} data-speed="5" alt="" className='layer'/>
      <img src={logo3} data-speed="2" alt="" className='layer'/>
      <img src={logo4} data-speed="6" alt="" className='layer'/>
      <img src={logo5} data-speed="8" alt="" className='layer'/>
      <img src={logo6} data-speed="-2" alt="" className='layer'/>
      <img src={logo7} data-speed="4" alt="" className='layer'/>
      <img src={logo8} data-speed="-9" alt="" className='layer'/>
      <img src={logo9} data-speed="6" alt="" className='layer'/>
      <img src={logo10} data-speed="-7" alt="" className='layer'/>
      <img src={logo11} data-speed="-5" alt="" className='layer'/>
      <h2 className="layer" data-speed="2"> PORTFOLIO</h2>
    </div>
  );
};

export default Acceuil;

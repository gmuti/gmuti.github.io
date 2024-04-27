import { useState, useEffect, useRef } from "react";
import logo1 from "../assets/img/logo-app1.png";
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
import logo12 from '../assets/img/logo-app12.png';
import logo13 from '../assets/img/logo-app13.png';
import logo14 from '../assets/img/logo-app14.png';
import logo15 from '../assets/img/logo-app15.png';
import logo16 from '../assets/img/logo-app16.png';
import logo17 from '../assets/img/logo-app17.png';
import logo18 from '../assets/img/logo-app18.png';
import logo19 from '../assets/img/logo-app19.png';
import logo20 from '../assets/img/logo-app20.png';
import logo21 from '../assets/img/logo-app21.png';
import logo22 from '../assets/img/logo-app22.png';
import logo23 from '../assets/img/logo-app23.png';

const Block = () => {
  const blockRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Met à jour l'état isVisible en fonction de l'entrée de l'observateur
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.9, // 
      }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, []);

  return (
    <>
      <h1>Mes Technos</h1>
    <div className={`section-blocks ${isVisible ? "visible" : ""}`} ref={blockRef}>
      
      <div className="block bgauche">
        <ul className="fb">
          <li>
            <h3>Front-end</h3>
            <ul className="technoss">
              <li>
                <div className="image">
                  <img src={logo22} alt="" />
                </div>
              </li>
              <li>
                <div className="image"></div>
              </li>
              <li>
                <div className="image">
                  <img src={logo10} alt="" />
                </div>
              </li>
              <li>
                <div className="image">
                  <img src={logo11} alt="" />
                </div>
              </li>
            </ul>
          </li>
          <li>
            <h4></h4>
            <ul className="technoss">
              <li>
                <div className="image">
                  <img src={logo9} alt="" />
                </div>
              </li>
              <li>
                <div className="image"></div>
              </li>
              <li>
                <div className="image"></div>
              </li>
              <li>
                <div className="image"></div>
              </li>
            </ul>
          </li>
          <li>
            <h3>Outils</h3>
            <ul className="technoss">
              <li>
                <div className="image">
                  <img src={logo13} alt="" />
                </div>
              </li>
              <li>
                <div className="image"></div>
              </li>
              <li>
                <div className="image"></div>
              </li>
              <li>
                <div className="image">
                  <img src={logo18} alt="" />
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="block bdroite">
        <ul className="fb">
          <li>
            <h3>Back-end & Programmation</h3>
            <ul className="technoss">
              <li>
                <div className="image">
                  <img src={logo1} alt="" />
                </div>
              </li>
              <li>
                <div className="image">
                  <img src={logo2} alt="" />
                </div>
              </li>
              <li>
                <div className="image"></div>
              </li>
              <li>
                <div className="image"></div>
              </li>
            </ul>
          </li>
          <li>
            <h4></h4>
            <ul className="technoss">
              <li>
                <div className="image"></div>
              </li>
              <li>
                <div className="image"></div>
              </li>
              <li>
                <div className="image">
                  <img src={logo3} alt="" />
                </div>
              </li>
              <li>
                <div className="image">
                  <img src={logo4} alt="" />
                </div>
              </li>
            </ul>
          </li>
          <li>
            <h3>Editeur</h3>
            <ul className="technoss">
              <li>
                <div className="image">
                  <img src={logo14} alt="" />
                </div>
              </li>
              <li>
                <div className="image">
                  <img src={logo19} alt="" />
                </div>
              </li>
              <li>
                <div className="image">
                  <img src={logo20} alt="" />
                </div>
              </li>
              <li>
                <div className="image"></div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Block;

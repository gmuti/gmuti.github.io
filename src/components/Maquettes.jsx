import { useState } from "react";
import maquette1 from "../assets/img/eventhub.png";
import maquette2 from "../assets/img/image0.png";
import maquette3 from "../assets/img/image1.png";

const Maquettes = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event, imageIndex) => {
    const image = event.target;
    const boundingRect = image.getBoundingClientRect();
    const centerX = boundingRect.left + boundingRect.width / 2;
    const centerY = boundingRect.top + boundingRect.height / 2;
    const angleX = (event.clientY - centerY) / 10;
    const angleY = (event.clientX - centerX) / 10;
    setRotation({ x: angleX, y: angleY, imageIndex });
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0, imageIndex: null });
  };

  return (
    <div className="maquette-section">
      <h1>Design Figma</h1>
      <div className="maquettes">
        <div
          className="maquette"
          onMouseMove={(e) => handleMouseMove(e, 1)}
          onMouseLeave={resetRotation}
        >
          <h2>Event-Hub</h2>
          <h4>Application d'évenement </h4>
          <img
            src={maquette1}
            alt="maquette 1"
            width={300}
            height={620}
            style={{
              transform:
                rotation.imageIndex === 1
                  ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                  : "none",
            }}
          />
        </div>
        <div
          className="maquette"
          onMouseMove={(e) => handleMouseMove(e, 2)}
          onMouseLeave={resetRotation}
        >
          <h2>Thor</h2>
          <h4>Application de géolocalisation </h4>
          <img
            src={maquette2}
            alt="maquette 2"
            width={300}
            height={620}
            style={{
              transform:
                rotation.imageIndex === 2
                  ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                  : "none",
            }}
          />
        </div>
        <div
          className="maquette"
          onMouseMove={(e) => handleMouseMove(e, 3)}
          onMouseLeave={resetRotation}
        >
          <h2>Kiuzo</h2>
          <h4>Application de vente </h4>
          <img
            src={maquette3}
            alt="maquette 3"
            width={300}
            height={620}
            style={{
              transform:
                rotation.imageIndex === 3
                  ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                  : "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Maquettes;

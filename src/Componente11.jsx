import React, { useEffect, useState } from "react";
import foto1 from "./imagenesslider/foto1.jpg";
import foto2 from "./imagenesslider/foto2.jpg";

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className='slider'
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {currentImageIndex === 0 && (
        <img
          src={foto1}
          alt='Imagen 1'
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
      {currentImageIndex === 1 && (
        <img
          src={foto2}
          alt='Imagen 2'
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
      <h1 className='slider-text'>Descubre la nueva colección</h1>
    </div>
  );
};

export default Slider;

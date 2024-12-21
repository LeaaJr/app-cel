import React, { useState, useEffect } from 'react';
import img from '../Img/Img';

const Carrousell = () => {
    // Define las imágenes en formato de array
    const images = [
      { src: img.displaylarge, alt: 'Image 1' },
      { src: img.thin_eqeewf, alt: 'Image 2' },
      { src: img.recycle_cam, alt: 'Image 3' },
      { src: img.color__eaawe4, alt: 'Image 4' },
      { src: img.hero_camera_hw, alt: 'Image 5' }
    ];
  
    // Estado para la imagen activa
    const [activeIndex, setActiveIndex] = useState(0);
  
    // Función para avanzar al siguiente slide
    const nextSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    // Función para retroceder al slide anterior
    const prevSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    // Cambiar la imagen cada 3 segundos
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
  
      return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
    }, []);
  
    return (
      <div id="gallery" className="relative h-[450px] w-full bg-black" data-carousel="slide">
        {/* Carousel Wrapper */}
        <div className="relative h-full overflow-hidden rounded-lg">
          {images.map((img, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`}
              data-carousel-item
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              />
            </div>
          ))}
        </div>
  
        {/* Slider Controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
  
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    );
  };
  
  export default Carrousell;
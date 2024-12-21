import React from "react";
import img from "../Img/Img";

const SectionGalery = () => {

    return (
        <section className="w-full mx-auto py-64 bg-white dark:bg-white-900 dark:text-white">

        
        <div className="w-full h-full flex flex-col items-center md:py-4 py-10">

          <div
            className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">

            <img className="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src={img.cam16pro} alt="billboard image" />

            <div className="md:w-[50%] w-full bg-gray-100 md:p-4 p-0 rounded-md">
                    <h2 className="text-3xl font-semibold dark:text-black">La más alta calidad de vídeo</h2>
                    <p className="text-md mt-4 text-black">El iPhone 16 Pro lleva el vídeo a una nueva dimensión con Dolby Vision 4K a 120 fps : nuestra mejor combinación de resolución y velocidad de fotogramas.
                    Gracias a la nueva cámara Fusion de 48MP con sensor de cuatro píxeles de segunda generación y nuestro potente chip A18 Pro,
                    podrás grabar en Dolby Vision 4K a 120 fps tanto en modo vídeo como en cámara lenta.</p>
                    </div>

          </div>
          <div
            className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">

                    <div className="md:w-[50%] w-full bg-gray-100 md:p-4 p-0 rounded-md">
                    <h2 className="text-3xl font-semibold dark:text-black">Nuevo Diseño</h2>
                    <p className="text-md mt-4 text-black">El iPhone 16 Pro tiene un diseño de titanio de grado 5 con un nuevo y elegante acabado microgranallado.
                     El titanio es uno de los metales con mejor relación peso/resistencia, por eso estos modelos Pro son increíblemente ligeros y al mismo tiempo robustos .
                    El iPhone 16 Pro está disponible en cuatro hermosos colores, incluido el nuevo Sand Titanium.</p>
                    </div>
            <img className="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src={img.iPhone16proartitaneo} alt="billboard image" />

          </div>
        </div>
      </section>
    );
};

export default SectionGalery
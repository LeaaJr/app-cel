import React from 'react';
import img from '../Img/Img';

const ImgPhone = ({ imgSrc, title, text, images }) => {
  return (
    <div className="flex flex-col items-center p-5">
      {/* Contenedor de texto e imagen 1 */}
      <div className="flex w-full max-w-4xl mb-5">
        <div className="flex-1 pr-5 flex flex-col justify-center">
          <h3 className="text-4xl font-semibold mb-2 text-white text-center  item-center">{title} Todos esos megapíxeles, listos para hacer cualquier cosa por ti. </h3>
          <p className="text-gray-600 text-lg text-center">{text} Haz que cada estilo sea aún más tuyo gracias a los nuevos controles que te permiten  ajustar fácilmente el tono y el color juntos . También puedes usar el control deslizante para cambiar la intensidad de colores individuales en lugar de cambiarlos todos.</p>
        </div>
        <div className="w-1/3 flex justify-center">
          <img src={img.megapixels_rosaone} alt="Phone 1" className="w-full h-auto rounded-lg" />
        </div>
      </div>
      
      {/* Contenedor de texto e imagen 2 */}
      <div className="flex w-full max-w-4xl mb-5">
        <div className="flex-1 pr-5 flex flex-col justify-center">
          <h3 className="text-4xl font-semibold mb-2 text-white text-left justify-center">{title} Sólo tu estilo </h3>
          <p className="text-gray-600 text-lg text-left">{text} El procesamiento de imágenes mejorado también hace posibles estilos más creativos, por lo que puedes personalizar el ambiente de tus fotos jugando con el color. </p>
        </div>
        <div className="w-1/3 flex justify-center">
          <img src={img.megapixels_rosatwo} alt="Phone 2" className="w-full h-auto rounded-lg" />
        </div>
      </div>
      
      {/* Contenedor de texto e imagen 3 */}
      <div className="flex w-full max-w-4xl mb-5">
        <div className="flex-1 pr-5 flex flex-col justify-center">
          <h3 className="text-4xl font-semibold mb-2 text-white text-left">{title} Date el tono que más te convenga</h3>
          <p className="text-gray-600 text-lg text-left">{text} Hemos creado nuevos estilos que le permiten  ajustar el aspecto de sus fotografías con una representación más avanzada de los tonos de piel y configurarla para todas las tomas.Gracias a la potencia del chip A18 Pro, podrás previsualizar el estilo aplicado, como ocurre con la gradación de color profesional en tiempo real.</p>
        </div>
        <div className="w-1/3 flex justify-center">
          <img src={img.megapixels_rosaothree} alt="Phone 3" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ImgPhone;


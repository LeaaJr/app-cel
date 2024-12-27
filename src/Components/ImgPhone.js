import React from 'react';
import img from '../Img/Img';

const ImgPhone = ({ imgSrc, title, text, images }) => {
  return (
    <div className="flex flex-col items-center p-5">
      {/* Contenedor de texto e imagen 1 */}
      <div className="flex w-full max-w-4xl mb-5">
        <div className="flex-1 pr-5 flex flex-col justify-center">
          <h3 className="text-4xl font-semibold mb-2 text-white text-center  item-center">{title} All those megapixels, ready to do anything for you. </h3>
          <p className="text-gray-600 text-lg text-center">{text} Make each look even more yours with new controls that let you easily adjust tone and color together. You can also use the slider to change the intensity of individual colors instead of changing all of them.</p>
        </div>
        <div className="w-1/3 flex justify-center">
          <img src={img.megapixels_rosaone} alt="Phone 1" className="w-full h-auto rounded-lg" />
        </div>
      </div>
      
      {/* Contenedor de texto e imagen 2 */}
      <div className="flex w-full max-w-4xl mb-5">
        <div className="flex-1 pr-5 flex flex-col justify-center">
          <h3 className="text-4xl font-semibold mb-2 text-white text-left justify-center">{title} Just your style </h3>
          <p className="text-gray-600 text-lg text-left">{text} Improved image processing also makes more creative styles possible, so you can personalize the mood of your photos by playing with color. </p>
        </div>
        <div className="w-1/3 flex justify-center">
          <img src={img.megapixels_rosatwo} alt="Phone 2" className="w-full h-auto rounded-lg" />
        </div>
      </div>
      
      {/* Contenedor de texto e imagen 3 */}
      <div className="flex w-full max-w-4xl mb-5">
        <div className="flex-1 pr-5 flex flex-col justify-center">
          <h3 className="text-4xl font-semibold mb-2 text-white text-left">{title} Give yourself the tone that suits you best </h3>
          <p className="text-gray-600 text-lg text-left">{text} We've created new styles that allow you to fine-tune the look of your photos with a more advanced representation of skin tones and set it for all shots. Thanks to the power of the A18 Pro chip, you'll be able to preview the applied style, just like grading. professional color in real time.</p>
        </div>
        <div className="w-1/3 flex justify-center">
          <img src={img.megapixels_rosaothree} alt="Phone 3" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ImgPhone;


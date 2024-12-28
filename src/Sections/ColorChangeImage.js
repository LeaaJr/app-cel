import { useState } from 'react';
import img from '../Img/Img';  // Importa las imágenes desde img.js

const ColorChangeImage = () => {
  const [selectedColor, setSelectedColor] = useState('#121415');
  const [selectedImage, setSelectedImage] = useState(img['#121415']);

  const colors = ['#121415', '#333739', '#585f63', '#776353'];

  const handleColorChange = (color) => {
    console.log("Color seleccionado:", color);  // Verifica el color seleccionado
    setSelectedColor(color);
    setSelectedImage(img[color]);  // Actualiza la imagen seleccionada
    console.log("Imagen seleccionada:", img[color]);  // Verifica si la imagen se carga correctamente
  };

  return (
    <div className='py-64' style={{ width: '100%', maxHeight: '500px', position: 'relative' }}>
      {/* Contenedor para la imagen */}
      <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
        <img
          src={selectedImage}  // Asegúrate de que la imagen esté correctamente seleccionada
          alt="Selected Image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'all 0.5s ease', // Transición suave
          }}
        />
      </div>

      {/* Paleta de colores - ahora en la parte inferior */}
      <div style={{
        position: 'relative',
        bottom: '15px',  // Moverla 10px arriba del borde inferior
        left: '50%',
        transform: 'translateX(-50%)',  // Centrarla horizontalmente
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: '10px 0',
      }}>
        {colors.map((color) => (
          <button
            key={color}
            style={{
              backgroundColor: color,
              width: '30px',
              height: '30px',
              margin: '0 5px',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'transform 0.2s ease', // Efecto de transformación al hacer hover
            }}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorChangeImage;

import React from "react";
import { Link } from "react-router-dom";
import '../Style/Home.css'
import img from "../Img/Img";
import Neon from '../Style/Neon.css'
import Banner from "../Components/Banner";
import EleHover from "../Components/EleHover";
import SectionGalery from '../Components/SectionGalery';
import Carrousell from "../Components/Carrousell";
import ColorChangeImage from '../Components/ColorChangeImage';
import ImgPhone from "../Components/ImgPhone";
import MoveCards from "../Components/MoveCards";

const Home = () => {
  return (
    <>
      <Banner />
      <SectionGalery />
      <div
        className=""
        style={{
          background:
            'linear-gradient(0deg, rgba(0,0,0,1) 17%, rgba(121,121,121,1) 43%, rgba(255,255,255,1) 100%)',
          height: '13rem',
          position: 'relative', // Asegúrate de que sea relativo para que la posición absoluta de .threeD sea respecto a este div
        }}
      >
        <div className="threeD">
          NUEVO PROCESADOR A18PRO INTEGRADO
        </div>
      </div>
      <div className="py-32">
        <img src={img.chip_A18PRO}></img>
      </div>
      <Carrousell />
      <ColorChangeImage />
      <div className="pt-96 pb-32">
      <EleHover />
      </div>
      <ImgPhone />
      <div className="py-32">
        <div className="contenedor">
          <h1 className="neon">FANTASTICO Y PROPIO <br /></h1>
        </div>
        <img src={img.hero_ios18bg}></img>
        </div>
        <MoveCards />
    </>
  );
};

export default Home;
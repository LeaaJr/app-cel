import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import EleHover from "../Components/EleHover";
import SectionGalery from '../Components/SectionGalery';
import Carrousell from "../Components/Carrousell";

const Home = () => {
  return (
    <>
      <Banner />
      <SectionGalery />
      <div className="" style={{
        background: 'linear-gradient(0deg, rgba(0,0,0,1) 17%, rgba(121,121,121,1) 43%, rgba(255,255,255,1) 100%)',
        height: '13rem'
        }}>

            <h1> asdada sadassa </h1>
        </div>
      <Carrousell />
      <EleHover />
    </>
  );
};

export default Home;
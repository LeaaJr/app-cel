import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import EleHover from "../Components/EleHover";
import SectionGalery from '../Components/SectionGalery';

const Home = () => {
  return (
    <>
      <Banner />
      <SectionGalery />
      <EleHover />
    </>
  );
};

export default Home;
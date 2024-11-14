import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/images/slider/Copacabanatour_Andes2Amazon .jpg";
import img2 from "../../assets/images/slider/Deathroad_Andes2Amazon .jpg";
import img3 from "../../assets/images/slider/La_Paz_city_Andes2Amazon .jpg";
import img4 from "../../assets/images/slider/Rurrenabaquetour_Andes2Amazon .jpg";
import img5 from "../../assets/images/slider/Sucre_Andes2Amazon .jpg";
import img6 from "../../assets/images/slider/Tiwanakutour_Andes2Amazon .jpg";
import img7 from "../../assets/images/slider/UyuniSaltFlatsadventure_Andes2Amazon .jpg";
import img8 from "../../assets/images/slider/_Andes2Amazon .jpg";

import "../Banner/banner.css";

const Banner = () => {
  return (
    <>
      <section className="slider">

        {/* Texto Fijo */}
        <div className="fixed-text">
          <h5 className=" text-white text-uppercase font-bold">BOOK YOUR NEXT AVENTURE <span > WHIT US</span></h5>
          <p className="sub_text">
          Experience the beauty of Bolivia with our tours.
          </p>
        </div>

        {/* Carrusel de Imágenes */}
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={img1} className="d-block w-100" alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} className="d-block w-100" alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} className="d-block w-100" alt="Slide 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img4} className="d-block w-100" alt="Slide 4" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img5} className="d-block w-100" alt="Slide 5" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img6} className="d-block w-100" alt="Slide 6" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img7} className="d-block w-100" alt="Slide 7" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img8} className="d-block w-100" alt="Slide 8" />
          </Carousel.Item>
        </Carousel>

      </section>
      <section>
        <h1 style={{ color: 'white' }}>seccion </h1>

      </section>
    </>
  );
};

export default Banner;


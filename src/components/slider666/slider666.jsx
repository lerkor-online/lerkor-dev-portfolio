"use client"

import React from "react";

// import Swiper core and required modules
import { EffectCoverflow, Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

import { EffectCards } from 'swiper/modules';
import Image from "next/image";

const Slider666 = () => {
  const data = [
    {
      id: "1",
      image:
        "https://res.cloudinary.com/dqcn7idzj/image/upload/v1703108335/Certificados/9b360cc867a1fd8ddc61604f62a281128b270d5c175135c533073499662d75d8_uadyez.jpg",
    },
    {
      id: "2",
      image:
        "https://res.cloudinary.com/dqcn7idzj/image/upload/v1703108336/Certificados/d197b6028db4b2123114867c439c8cf875007fcddeb4b1305479bf203cbb351c_vmqkab.jpg",
    },
    {
      id: "3",
      image:
        "https://res.cloudinary.com/dqcn7idzj/image/upload/v1703108334/Certificados/Certificado_-_Curso_profesional_de_React_omzipx.jpg",
    },
    {
      id: "4",
      image:
        "https://res.cloudinary.com/dqcn7idzj/image/upload/v1703108335/Certificados/Graduaci%C3%B3n_PT13a_Henrys_Rockstar_cmto7v.jpg",
    },
    {
      id: "5",
      image:
        "https://res.cloudinary.com/dqcn7idzj/image/upload/v1703108334/Certificados/Certificado_-_Curso_Profesional_de_Angular_bz2zfy.jpg",
    },
    {
      id: "6",
      image:
        "https://res.cloudinary.com/dqcn7idzj/image/upload/v1703108334/Certificados/Certificado_-_Bootcamp_de_React_Avanzado_con_Next.js_dbfgni.jpg",
    },
  ];

  return (
    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
    {/* <Swiper
    effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
    > */}
            {data.map((element) => (
                <SwiperSlide key={element.id}>
                    <a href={element.image}>
                        <Image
                            src={element.image}
                            alt="Slider"
                            width={420}
                            height={420}
                            className="p-6"
                        />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider666;
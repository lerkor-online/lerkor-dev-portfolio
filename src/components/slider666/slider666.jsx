"use client"

import React from "react";

// import Swiper core and required modules
import { EffectCoverflow, Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import './styles.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from "next/image";

const Slider666 = () => {
  const data = [
    {
      id: "1",
      image:
        "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696952308/Coderhouse_hgiuqd.jpg",
    },
    {
      id: "2",
      image:
        "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696952308/Certificado_-_Curso_profesional_de_React_tndc6p.jpg",
    },
    {
      id: "3",
      image:
      "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696952309/Lerkor-dev-Henry_jfdcbh.jpg",
    },
    {
        id: "4",
        image:
        "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696952308/TA_Lerkor_jtbmfh.jpg",
    },
    {
        id: "5",
        image:
          "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696952308/Coderhouse_hgiuqd.jpg",
      },
      {
        id: "6",
        image:
          "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696952308/Certificado_-_Curso_profesional_de_React_tndc6p.jpg",
      },
      {
        id: "7",
        image:
        "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696952309/Lerkor-dev-Henry_jfdcbh.jpg",
      },
      {
          id: "8",
          image:
          "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696952308/TA_Lerkor_jtbmfh.jpg",
      },
      {
        id: "9",
        image:
          "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696952308/Coderhouse_hgiuqd.jpg",
      },
      {
        id: "10",
        image:
          "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696952308/Certificado_-_Curso_profesional_de_React_tndc6p.jpg",
      },
      {
        id: "11",
        image:
        "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696952309/Lerkor-dev-Henry_jfdcbh.jpg",
      },
      {
          id: "12",
          image:
          "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696952308/TA_Lerkor_jtbmfh.jpg",
      },
    
  ];

  return (
    <Swiper
    effect={'coverflow'}
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
    >
            {data.map((element) => (
                <SwiperSlide key={element.id}>
                    <a href={element.image}>
                        <Image
                            src={element.image}
                            alt="Slider"
                            width={420}
                            height={420}
                        />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider666;
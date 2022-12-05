import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import projImg1 from '../../assets/images/logo1.png'
import projImg2 from '../../assets/images/logo2.png'
import projImg3 from '../../assets/images/logo3.png'
import styled from 'styled-components';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation } from 'swiper';
// import 'swiper/swiper-bundle.min.css';
import ProjectItem from './ProjectItem';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';

SwiperCore.use([Navigation]);

const projects = [
    {
        id: uuidv4(),
        name: "Business Startup",
        desc: "Design & Development",
        img: projImg1,
    },
    {
        id: uuidv4(),
        name: "Business Startup",
        desc: "Design & Development",
        img: projImg2,
    },
    {
        id: uuidv4(),
        name: "Business Startup",
        desc: "Design & Development",
        img: projImg3,
    },
];
const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <ProjectSectionStyle>
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation
                                breakpoints={{
                                    // when window width is >= 640px
                                    640: {
                                        slidesPerView: 1,
                                    },
                                    // when window width is >= 768px
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    // when window width is >= 1200px
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {projects.map((project, index) => {
                                    if (index >= 5) return;
                                    return (
                                        <SwiperSlide key={project.id}>
                                            <ProjectItem
                                                title={project.name}
                                                img={project.img}
                                                desc={project.desc}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                </ProjectSectionStyle>
            </div>
            <Loader type="ball-clip-rotate-multiple" />
        </>
    );
}

export default Portfolio;
import React, { useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import ProjectItem from './ProjectItem';
import projectList from "../../assets/projectList";

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

                    <div className="projectList">
                        {projectList.map((project, index) => {
                            return <ProjectItem name={project.name} image={project.imgs[0]} id={index}/>
                        })}
                </div>
            </div>
            <Loader type="ball-clip-rotate-multiple" />
        </>
    );
}

export default Portfolio;
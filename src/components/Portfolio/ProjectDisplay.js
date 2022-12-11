import React from 'react'
import { useParams } from 'react-router-dom'
// import {projectList}
import projectList from "../../assets/projectList";
import SimpleImageSlider from "react-simple-image-slider";
import devpost from '../../assets/images/devpost2.png'
import github from '../../assets/images/github.png'

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = projectList[id];
  const mystyle = {

    border: '2px solid black',
    borderRadius: '10px',
    backgroundSize: 'contain !important',
  };

  const mystyle2 = {
  }
  return (
    <div className='project'>
      <h1> {project.name} </h1>
      {/* <ProjectImage /> */}

      {id == 0 ? <div >
        <SimpleImageSlider
          width={600}
          height={500}
          images={project.imgs}
          showBullets={true}
          showNavs={true}
          style={mystyle}
          autoPlay={true}
        />
      </div> :
        id == 1 ? <div >
          <SimpleImageSlider
            width={400}
            height={604}
            images={project.imgs}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
          />
        </div> :
          id == 2 ? <div >
            <SimpleImageSlider
              width={650}
              height={604}
              images={project.imgs}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
            />
          </div> : <div >
            <SimpleImageSlider
              width={896}
              height={604}
              images={project.imgs}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
            />
          </div>}
      <div id="parent">
        <div className="col-1">
          <b>Skills: </b>{project.skills}
        </div>
        <div className="col-2">
          <b>Description: </b>{project.desc}
        </div>
      </div>

      <li>
        <a href={project.links[0]} target="_blank" rel="noreferrer">
          <img src={github} alt="example" style={{ width: '80px' }} />
        </a>
        {project.links.length == 2 &&
          <a href={project.links[1]} target="_blank" rel="noreferrer">
            <img src={devpost} alt="example" style={{ width: '90px' }} />
          </a>
        }
      </li>
    </div>
  )
}

export default ProjectDisplay
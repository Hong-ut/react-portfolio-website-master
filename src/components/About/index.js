import { useEffect, useState } from 'react'
// import {
//   faCss3,
//   faHtml5,
//   faJsSquare,
//   faReact,
//   faJava,
//   faNodeJs
// } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className=''>
            I'm a first year Computer Science student in University of Toronto St.George Campus, who is looking forward to graduate with focus on AI. 
          </p>
          <p>
            My interest falls in the field of Web Development, particualrly in Full Stack Development, as well as Machine Learning.
          </p>
          <p align="LEFT">
            I'm a very ambitious full stack developer who currently as a full stack and blockchian developer at a startup. 
          </p>
          <p>
            I see myself as a quick and passionate learner who is open-minded and open to learn about anything from anyone. 
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            {/* <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJava} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faCss3} color="#EC4D28" />
            </div> */}
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default About

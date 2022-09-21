import React from 'react'
import aboutpicture from '../assets/images/ICHIE-picx.jpg'
import abouticon from '../assets/images/ICHIE-picx-2.jpg'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCss3,faNodeJs,faReact,faJs} from '@fortawesome/fontawesome-free-brands'



const About = () => {
let navigate = useNavigate()
  return (
    <div>

    <div className="about-content">
      <div className="about-child">
     <img src={aboutpicture} className="img-about" alt='' width="270" height="320" />
     <img src={abouticon} class="img-about" alt='' width="200" height="200"/>
     <FontAwesomeIcon icon={faCss3} class="about-icon css-icon"></FontAwesomeIcon>
     <FontAwesomeIcon icon={faJs} class="about-icon js-icon"></FontAwesomeIcon>
     <FontAwesomeIcon icon={faNodeJs} class="about-icon node-icon"></FontAwesomeIcon>
     <FontAwesomeIcon icon={faReact} class="about-icon react-icon"></FontAwesomeIcon>
      </div>
      <div className="about-child">
        <h3 style={{color:"orangered"}}>About Me</h3>
        <p style={{color:"white"}}>I am a Developer</p>
        <p style={{color:"white"}}>Ichie Chinemerem Richard is a passionate and goal driven
          Techpreneur whose interest is using technology to build solutions to solve 
          real world problem. I like to craft solid and scalable web applications
          with great user experiences.
        </p>
      <button className="project-btn" onClick={()=>{
            navigate("/project")
           }}>View Projects</button>

      </div>
          </div>
          </div>

  )
}

export default About
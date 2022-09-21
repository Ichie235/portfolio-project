import React from 'react'
import profilepic from '../assets/images/IMG-profile-pic.jpg'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrophy} from '@fortawesome/free-solid-svg-icons'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import About from '../components/About'
import Projects from '../components/Projects'




const Home = () => {
  let navigate = useNavigate()
  return (
    <React.Fragment>
    <div className="intro-content">
      <div className="intro-child1">
      <img src={profilepic} alt="ichie's pic" width="350" height="400" className="img-cover"/>
      <FontAwesomeIcon icon={faTrophy} class="icon"></FontAwesomeIcon>
      <span  className="icon-text1">Growth-mindset</span>
      <span  className="icon-text2">Creative Thinking</span>
      </div>
      <div className="intro-child2">
            <p class="title">
              Hello I'm
            </p>
            <p className="title"><strong>Ichie Chinemerem Richard</strong></p>
            <p className="title"> Top notch Developer</p>
            <p style={{color:"white"}}>Krnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
              omnis</p>
            
            <button className="title-btn" onClick={()=>{
              navigate("/about")}}>About Me</button>
            </div>
           
            </div>
            <About />
            <Skills />
            <Projects />
            <Contact />
            </React.Fragment>
           
  )
}

export default Home
import React from 'react'

const Skills = () => {
  return (
    <div>
        <h2 style={{color:"orangered",textAlign:"center"}}>
          My skills
          </h2>
        <p style={{color:"white",textAlign:"center"}}>I Develop Skills Regularly</p>
        <p style={{color:"white",textAlign:"center"}}>Developing skills is important because it determines your ability to 
            execute your plans with success.
        </p>
    <ul className="skill-container">
        <li className="list">
            <div className="wrapper">
                <span className="skill-text">
                    Html
                </span>
                <span className="skill-text">95%</span>
            </div>
            <div className="progress-container">
                <div className="progress-bar html"> </div>
            </div>
        </li>
        <li className="list">
            <div className="wrapper">
                <span className="skill-text">
                   Css
                </span>
                <span className="skill-text">85%</span>
            </div>
            <div className="progress-container">
                <div className="progress-bar css"></div>
            </div>
        </li>
        <li className="list">
            <div className="wrapper">
                <span class="skill-text">
                   Javascript
                </span>
                <span className="skill-text">75%</span>
            </div>
            <div className="progress-container">
                <div className="progress-bar javascript"></div>
            </div>
        </li>
        <li className="list">
            <div className="wrapper">
                <span className="skill-text">
                   Node.Js
                </span>
                <span className="skill-text">75%</span>
            </div>
            <div className="progress-container">
                <div className="progress-bar javascript"></div>
            </div>
        </li>
        <li className="list">
            <div className="wrapper">
                <span className="skill-text">
                   React 
                </span>
                <span className="skill-text">75%</span>
            </div>
            <div className="progress-container">
                <div className="progress-bar react"></div>
            </div>
        </li>
        <li className="list">
            <div className="wrapper">
                <span className="skill-text">
                   MongoDB
                </span>
                <span className="skill-text">75%</span>
            </div>
            <div className="progress-container">
                <div className="progress-bar mongodb"></div>
            </div>
        </li>
        </ul>
    </div>
  )
}

export default Skills
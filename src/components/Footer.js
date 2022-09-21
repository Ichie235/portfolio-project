import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
import {faTrophy} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">

      <p className="copyright">
      <FontAwesomeIcon icon={faTrophy} className="name-icon" style={{color: "gold",fontSize:20}}></FontAwesomeIcon>
      Ichie chinemerem.
      </p>
      <div className='brand'>
      <a href="https://www.linkedin.com/in/chinemerem-ichie-4604ba23am" className="brand-icon" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin}  />
        </a>
      <a href="https://twitter.com/chinemerem_rich" className="brand-icon" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter}  />
        </a>
      <a href="https://github.com/Ichie235" className="brand-icon" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub}  />
        </a>
      </div>
      <div style={{color: "white",fontSize:13,textAlign:"center"}} > 
        <p>Copyright &copy; 2020</p>
      </div>
      
    </div>
  </footer>
  )
}

export default Footer
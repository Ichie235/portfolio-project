import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarker,faPhone,faMessage}  from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
  
     <div className='contact-container'>
      <div>
        <h3 className="card-subtitle"> Contact-Me</h3>
        <p className="h2 section-title">Drop me a line</p>
        <form action='' >
          <div className='form-style'>
          <input type="text" name="name" placeholder="Name" className="contact-input" required/>
          </div>
          <div className='form-style'>
          <input type="email" name="email" placeholder="Email" className="contact-input" required/>
          </div>
          <div className='form-style'>
          <textarea name="message" placeholder="Message" className="contact-input" required ></textarea>
          </div>
          <div className='form-style'>
          <button type="submit" className="btn-submit">Submit Message</button>
          </div>
        </form>
      </div>
      <div>
      <ul className="contact-list">

<li className="contact-item">

  <div className="contact-icon">
  <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> 
  </div>

  <div>
    <h3 className="contact-item-title">Email</h3>

    <a href="mailto:chinemeremichie@gmail.com" className="contact-item-link">chinemeremichie@gmail.com</a>
  </div>

</li>

<li className="contact-item">

  <div className="contact-icon">
  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 
  </div>

  <div>
    <h3 className="contact-item-title">Phone</h3>

    <a href="tel:+1234567890" className="contact-item-link">+2348149088454</a>
  </div>

</li>
<li className="contact-item">

  <div className="contact-icon">
  <FontAwesomeIcon icon={faMapMarker} ></FontAwesomeIcon> 
  </div>

  <div>
    <h3 className="contact-item-title">Address</h3>

    <address className="contact-item-link">
      #########
    </address>
  </div>

</li>

</ul>
      </div>

</div>
     
     
  )
}

export default Contact
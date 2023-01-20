import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container contact__container'>
        <div className='section__title'>
          <h2>contact</h2>
          <div className='underline'></div>
        </div>
        <p className='contact__first-p'>
          if you like what you are looking at feel free to contact me through
          any of the following and i’d get to you as soon as possible
        </p>
        <div className='contact__btns'>
          <a href='' className='btn'>
            Email
          </a>
          <a href='' className='btn white'>
            Linkedin
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

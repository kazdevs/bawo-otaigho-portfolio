import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineDribbble } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { GrLinkedinOption } from 'react-icons/gr'
import { BsBehance } from 'react-icons/bs'

// import { TfiLinkedin } from 'react-icons/tf'
import './footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container footer__container'>
        <div className='footer__text'>
          <h2>Bawo Otaigho</h2>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product,
          </p>
        </div>
        <div className='footer__socials'>
          <h3>socials</h3>
          <div className='social__icons'>
            <a href=''>
              <GrLinkedinOption />
            </a>
            {/* <a href=''><TfiLinkedin /></a> */}
            <a href=''>
              <BsBehance />
            </a>
            <a href=''>
              <AiOutlineDribbble />
            </a>
            <a href=''>
              <AiOutlineInstagram />
            </a>
            <a href=''>
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

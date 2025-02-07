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
            I’m Bawo Otaigho, a dedicated Product Designer focused on delivering exceptional user experiences that elevate brands and drive results.
          </p>
        </div>
        <div className='footer__socials'>
          <h2>socials</h2>
          <div className='social__icons'>
            <a
              href='https://www.linkedin.com/in/bawo-otaigho-b49a69167/'
              target='_blank'
            >
              <GrLinkedinOption />
            </a>

            <a href='https://www.behance.net/bawootaigho' target='_blank'>
              <BsBehance />
            </a>
            <a href='https://dribbble.com/OBex' target='_blank'>
              <AiOutlineDribbble />
            </a>
            <a href='https://www.instagram.com/uidesign3r/' target='_blank'>
              <AiOutlineInstagram />
            </a>
            <a href='mailto:otaighobawo@gmail.com' target='_blank'>
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

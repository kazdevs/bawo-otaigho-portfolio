import React from 'react'
import { useState } from 'react'
import './about.css'
import AboutImg from '../../assets/bawo.jpg'
import Skills from '../../components/skills/Skills'
import Cv from '../../assets/Bawo_Otaigho.pdf'
import data from './about-data'

const About = () => {
  const [paragraphs, setParagraphs] = useState(data)
  return (
    <section id='about'>
      <div className='container about__container'>
        <div className='section__title'>
          <h2>About Me</h2>
          <div className='underline'></div>
        </div>
        <div className='about__top'>
          <div className='about__left'>
            <h4>Get to Know Me!</h4>
            <div className='about__left-paragraphs'>
              <p>
                Hello! My name is Bawo. I’m a dedicated Ux/Ui designer. I enjoy
                designing clean, user-intuitive websites, web applications and
                moblie applications that leads to the success of the overall
                product. You can check out some of my work in the projects
                section.
              </p>
              <p>
                I also like sharing content related to Ux/Ui design that I have
                learned over the years so as to help beginners looking to
                transition into design and also update fellow designers on
                latest design trends. Feel free to Connect or Follow me on my
                {'  '}
                <span style={{ color: 'red' }}>
                  <a
                    href='https://www.instagram.com/uidesign3r/'
                    target='_blank'
                    style={{ color: '#52d6f4' }}
                  >
                    instagram{' '}
                  </a>
                </span>
                {'  '}
                where I post useful content related to ux/ui.
              </p>
              <p>
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience, then don't hesitate to contact me.
              </p>
            </div>
            <a href='#contact' className='btn'>
              Contact Me
            </a>
          </div>
          <div className='about__right'>
            <div className='about__portrait'>
              <img src={AboutImg} alt='' />
            </div>
          </div>
        </div>
        <div className='about__bottom'>
          <h4>My skills</h4>
          <Skills paragraphs={paragraphs}></Skills>
          <a href={Cv} download className='btn'>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

import React from 'react'
import './about.css'
import AboutImg from '../../assets/bawo.jpg'
import Skills from '../../components/skills/Skills'

const About = () => {
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
                Hello! My name is Bawo. i’m a dedicated ux/ui designer based in
                lagos, nigeria. i enjoy designing clean, user-intuitive
                websites, web applications and moblie applications that leads to
                the success of the overall product. You can check out some of my
                work in the projects section.
              </p>
              <p>
                I also like sharing content related to ux/ui design that I have
                learned over the years so as to help beginners looking to
                transition into design and also update fellow designers on
                latest design trends. Feel free to Connect or Follow me on my
                instagram where I post useful content related to ux/ui.
              </p>
              <p>
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience, then don't hesitate to contact me.
              </p>
            </div>
            <a href='#contact' download className='btn'>
              Contact Me
            </a>
          </div>
          <div className='about__right'>
            <div className='about__portrait'>
              <img src={AboutImg} alt='' />
            </div>
            {/* <div className='box'></div> */}
          </div>
        </div>
        <div className='about__bottom'>
          <h4>My skills</h4>
          <Skills></Skills>
          <a href='#' download className='btn'>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

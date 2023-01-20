import React, { useState, useEffect } from 'react'
import data from '../../sections/projects/data'
import { Link, useParams } from 'react-router-dom'
import Skills from '../../components/skills/Skills'
import Navbar from '../../sections/navbar/Navbar'
// import Header from '../../sections/header/Header'
import Footer from '../../sections/footer/Footer'
import './projectDetail.css'
import { motion } from 'framer-motion'

const ProjectDetail = () => {
  const [title, setTitle] = useState('')
  const [projectOverview, setProjectOverview] = useState('')
  const [image, setImage] = useState('')
  const [smallText, setsmallText] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id))
    setTitle(newPerson.title)
    setImage(newPerson.image)
    setProjectOverview(newPerson.projectOverview)
    setsmallText(newPerson.smallText)
  }, [])

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      transition={{ duration: 0.75 }}
      exit={{ opacity: 1 }}
      id='project-detail'
    >
      {/* <Navbar /> */}
      <header id='project__details__header'>
        <div className='container header__container'>
          <h1>{title}</h1>
          <p>{smallText}</p>
          <div className='btns'>
            <a href='#projects' className='btn'>
              Case Study
            </a>
            <a href='#projects' className='btn white'>
              View Prototype
            </a>
          </div>
        </div>
      </header>

      <section className='project__detial-container'>
        <div className='project__detail-image'>
          <img src={image} alt='' />
        </div>
      </section>

      <section className='container project__overview'>
        <h2>Project Overview</h2>
        <p>{projectOverview}</p>
        <a href='' className='btn'>
          case study
        </a>
      </section>
      <section className='container tools__used'>
        <h2>tools used</h2>
        <Skills></Skills>
      </section>
      <section className='container see__prototype'>
        <h2>see prototype</h2>
        <div className='btns'>
          <a href='' className='btn'>
            live link
          </a>
          <a href='' className='btn white'>
            go back
          </a>
        </div>
      </section>
      <Footer></Footer>
    </motion.div>
  )
}

export default ProjectDetail

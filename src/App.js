import './App.css'
import { useState, useEffect } from 'react'
// import ClipLoader from 'react-spinners/ClipLoader'
// import CircleLoader from 'react-spinners/ClipLoader'
import ClockLoader from 'react-spinners/ClockLoader'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from 'react-router-dom'
import Navbar from './sections/navbar/Navbar'
import Home from './Pages/home/Home'
import ProjectDetail from './Pages/projectDetail/ProjectDetail'
import { AnimatePresence } from 'framer-motion'
function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  if (loading) {
    return (
      <div className='loader__container'>
        <ClockLoader color='#36d7b7' size={150} />
        {/* <CircleLoader color='#408697' size={150} /> */}
        {/* <ClipLoader color={'#36d7b7'} loading={loading} size={150} /> */}
      </div>
    )
  }
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <AnimatePresence>
          <Routes>
            <Route key={Router.pathname} path='/' element={<Home />}></Route>
            {/* <Route
              key={Router.pathname}
              path='/project-detail/:id'
              element={<ProjectDetail />}
            ></Route> */}
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  )
}

export default App

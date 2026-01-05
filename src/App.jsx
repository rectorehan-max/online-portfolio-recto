import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import ProjectDetail from './pages/ProjectDetails'
import SkillDescription from './pages/SkillDescription'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1a1b26] text-[#c0caf5] font-mono">
        <Navbar/>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/projects" element={ <Projects/> } />
            <Route path="projects/:id" element={ <ProjectDetail/> } />
            <Route path="/skills" element={ <Skills/> } />
            <Route path="/skills/:id" element={ <SkillDescription/> } />
          </Routes>

        <Footer/>
      </div>
    </Router>
  )
}

export default App

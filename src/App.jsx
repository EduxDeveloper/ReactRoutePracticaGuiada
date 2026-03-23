import {BrowserRouter as Router, Routes, Route} 
from 'react-router'


import Home from './Pages/Home'
import About from './Pages/About'
import Nav from './Components/Nav'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
    <Router>
|    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App

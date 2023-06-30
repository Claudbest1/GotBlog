import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'

const App = () => {
  return (
    
    <BrowserRouter>
      <Nav className="absolute" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
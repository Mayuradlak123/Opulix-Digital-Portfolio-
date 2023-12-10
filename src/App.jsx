import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Work from './pages/Work'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"></link>
       <BrowserRouter>
        <Routes>
           <Route  index Component={Home} />
           <Route  path="/services" Component={Services} />
           <Route  path="/our-work" Component={Work} />
           <Route  path="/about-us" Component={AboutUs} />
           <Route  path="/term-condition" Component={PrivacyPolicy} />
           <Route  path="/privacy-policy" Component={PrivacyPolicy} />
           <Route  path="/contact-us" Component={Home} />
           <Route  path="/case-study" Component={Home} />
           
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

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
import TermConditions from './pages/TermConditions'
import ContactUs from './pages/ContactUs'
import CaseStudy from './components/CaseStudy'
import NotFound from './components/NotFound'
import 'react-toastify/dist/ReactToastify.css';

// Import ToastContainer
import { ToastContainer } from 'react-toastify';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
      />

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"></link>
      <BrowserRouter>
        <Routes>
          <Route index Component={Home} />
          <Route path="/services" Component={Services} />
          <Route path="/our-work" Component={Work} />
          <Route path="/about-us" Component={AboutUs} />
          <Route path="/term-condition" Component={TermConditions} />
          <Route path="/privacy-policy" Component={PrivacyPolicy} />
          <Route path="/contact-us" Component={ContactUs} />
          <Route path="/case-study" Component={CaseStudy} />
          <Route path='/*' Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer  from './components/Footer'
import Navbar from './components/Navbar'
import Dashboard from './components/modules/Dashboard'
import AgriPage from './components/modules/Agripage'
import HomeSecurityPage from './components/modules/HomeSecurityPage'
import Jobpage from './components/modules/Jobpage'
import SettingsPage from './components/modules/SettingsPage'
import '@fortawesome/fontawesome-free/css/all.min.css';



const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/agri" element={<AgriPage />} />
      <Route path="/home" element={<HomeSecurityPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/job" element={<Jobpage />} />
    </Routes>
    <Footer />
  </Router>
)

export default App

import { Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import LoginIn from './components/LoginIn'
import './App.css' // Assuming you have a CSS file for styles
import Dashboard from './components/Dashboard'
import Policy from './components/Policy'
import ImageUploader from './components/ImageUploader'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LoginIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/policy" element={<Policy/>} />
      {/* Add more routes as needed */}
    </Routes>
  )
}

export default App

// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import LandingPage from './pages/LandingPage'
import UploadPage from './pages/UploadPage'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </Router>
  )
}

export default App

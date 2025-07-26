// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import LandingPage from './pages/Home'
import UploadPage from './pages/Upload'
import ReviewPage from './pages/ReviewPage'
import CorrectionPage from './pages/CorrectionPage'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/correction" element={<CorrectionPage />} />
      </Routes>
    </Router>
  )
}

export default App

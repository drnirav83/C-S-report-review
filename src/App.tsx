// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import LandingPage from './pages/Home'
import UploadPage from './pages/Upload'
import ReviewPage from './pages/ReviewPage'
import CorrectionPage from './pages/CorrectionPage'
import TechnicianApprovalPage from './pages/TechnicianApprovalPage'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/correct" element={<CorrectionPage />} />
        <Route path="/approve" element={<TechnicianApprovalPage />} />
      </Routes>
    </Router>
  )
}

export default App

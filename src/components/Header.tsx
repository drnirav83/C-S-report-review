// src/components/Header.tsx
import { Link } from 'react-router-dom'
import './Header.css'

export function Header() {
  return (
    <header>
      <h1>Microcheck Report Aid</h1>
      <p>Validate microbiology culture & sensitivity reports</p>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/upload">Upload</Link> |{' '}
        <Link to="/review">Review</Link> |{' '}
        <Link to="/correction">Correction</Link>
      </nav>
    </header>
  )
}

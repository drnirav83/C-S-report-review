// src/components/Header.tsx
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f4f4f4' }}>
      <h1>Microcheck Report Aid</h1>
      <p>Validate microbiology culture & sensitivity reports</p>
      <nav style={{ marginTop: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/upload" style={{ marginRight: '1rem' }}>Upload</Link>
        <Link to="/review" style={{ marginRight: '1rem' }}>Review</Link>
        <Link to="/correct" style={{ marginRight: '1rem' }}>Correct</Link>
        <Link to="/approve">Approve</Link>
      </nav>
    </header>
  )
}

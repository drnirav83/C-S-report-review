// src/pages/Home.tsx
import { Link } from 'wouter'

export default function Home() {
  return (
    <div>
      <h2>Welcome to Microcheck Report Aid</h2>
      <p>This app helps validate microbiology culture & sensitivity reports.</p>
      <Link href="/upload">Upload Report</Link>
    </div>
  )
}

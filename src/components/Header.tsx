export function Header() {
  return (
    <header className="header">
      <h1>🔍 Header is Loaded</h1>
      ...
import './Header.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="header">
      <h1>Welcome to Microcheck Report Aid</h1>
      <p>This app helps validate microbiology culture & sensitivity reports.</p>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/review">Review</Link>
        <Link to="/correct">Correct</Link>
        <Link to="/approve">Approve</Link>
      </nav>
    </header>
  );
}

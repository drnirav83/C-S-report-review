// src/pages/CorrectionPage.tsx
import { useState } from 'react'

export default function CorrectionPage() {
  const [comments, setComments] = useState('')
  const [approved, setApproved] = useState(false)

  const handleSubmit = () => {
    if (approved) {
      alert('Report Approved ✅ (Mock action)')
    } else {
      alert('Corrections Submitted ✏️ (Mock action)')
    }
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Microbiologist Correction Page</h2>

      <p><strong>Organism:</strong> E. coli</p>
      <p><strong>Specimen:</strong> Urine</p>
      <p><strong>Site:</strong> UTI</p>

      <h3>AI Suggestions:</h3>
      <ul>
        <li>Amikacin reported sensitive — not valid for Enterococcus</li>
        <li>Vancomycin included — likely an error</li>
      </ul>

      <textarea
        placeholder="Comments or corrections..."
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        rows={4}
        style={{ width: '100%', marginTop: '1rem' }}
      />

      <div style={{ marginTop: '1rem' }}>
        <label>
          <input
            type="checkbox"
            checked={approved}
            onChange={(e) => setApproved(e.target.checked)}
          />{' '}
          Approve report without changes
        </label>
      </div>

      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

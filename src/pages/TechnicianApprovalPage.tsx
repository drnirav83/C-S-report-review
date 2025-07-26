// src/pages/TechnicianApprovalPage.tsx
import { useState } from 'react'

export default function TechnicianApprovalPage() {
  const [approved, setApproved] = useState(false)

  const handleSubmit = () => {
    if (approved) {
      alert('Final Report Released 🚀 (Mock)')
    } else {
      alert('Please confirm approval before release.')
    }
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Technician Final Approval</h2>

      <p><strong>Organism:</strong> E. coli</p>
      <p><strong>Specimen:</strong> Urine</p>
      <p><strong>Site:</strong> UTI</p>

      <h3>Microbiologist Comments:</h3>
      <p>- Remove vancomycin, not relevant for gram-negatives</p>
      <p>- Validated AST and site interpretation</p>

      <div style={{ marginTop: '1rem' }}>
        <label>
          <input
            type="checkbox"
            checked={approved}
            onChange={(e) => setApproved(e.target.checked)}
          />{' '}
          I confirm and approve this report for release
        </label>
      </div>

      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

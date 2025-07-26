// src/pages/ReviewPage.tsx
import { useState } from 'react'

export default function ReviewPage() {
  const [aiFindings, setAiFindings] = useState<string[]>([
    'Amikacin reported sensitive — but not valid for Enterococcus.',
    'Ceftriaxone reported sensitive — organism likely ESBL-producer, verify.',
    'Vancomycin reported for Gram-negatives — check if entered by mistake.'
  ])

  const handleSendToMicrobiologist = () => {
    alert('Report sent to microbiologist for review! (Mock action)')
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>AI Review Page</h2>

      <p><strong>Organism:</strong> E. coli</p>
      <p><strong>Specimen:</strong> Urine</p>
      <p><strong>Site:</strong> UTI</p>
      <p><strong>Clinical History:</strong> Diabetic, prior resistance reported</p>

      <h3>AI Detected Issues:</h3>
      <ul>
        {aiFindings.map((finding, idx) => (
          <li key={idx} style={{ color: 'red' }}>{finding}</li>
        ))}
      </ul>

      <br />
      <button onClick={handleSendToMicrobiologist}>Send to Microbiologist</button>
    </div>
  )
}

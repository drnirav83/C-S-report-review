// src/pages/CorrectionPage.tsx
import { useState } from 'react'

export default function CorrectionPage() {
  const [reportData, setReportData] = useState({
    organism: 'E. coli',
    site: 'Urine',
    ast: [
      { antibiotic: 'Ampicillin', result: 'Resistant' },
      { antibiotic: 'Nitrofurantoin', result: 'Sensitive' },
    ],
  })

  const [corrections, setCorrections] = useState(reportData.ast)

  const handleChange = (index: number, newResult: string) => {
    const updated = [...corrections]
    updated[index].result = newResult
    setCorrections(updated)
  }

  const handleSubmit = () => {
    console.log('Corrected AST submitted:', corrections)
    alert('Corrections submitted!')
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Correction Page</h2>
      <p><strong>Organism:</strong> {reportData.organism}</p>
      <p><strong>Site:</strong> {reportData.site}</p>

      <table border={1} cellPadding={6}>
        <thead>
          <tr>
            <th>Antibiotic</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {corrections.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.antibiotic}</td>
              <td>
                <select
                  value={entry.result}
                  onChange={(e) => handleChange(idx, e.target.value)}
                >
                  <option value="Sensitive">Sensitive</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Resistant">Resistant</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleSubmit} style={{ marginTop: '1rem' }}>
        Submit Corrections
      </button>
    </div>
  )
}

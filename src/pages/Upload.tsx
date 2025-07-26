// src/pages/Upload.tsx
import { useState } from 'react'

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [organism, setOrganism] = useState('')
  const [specimen, setSpecimen] = useState('')
  const [site, setSite] = useState('')
  const [history, setHistory] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!file || !organism || !specimen) {
      alert('Please fill all required fields.')
      return
    }

    const formData = new FormData()
    formData.append('file', file)
    formData.append('organism', organism)
    formData.append('specimen', specimen)
    formData.append('site', site)
    formData.append('history', history)

    console.log('Submitting form:')
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1])
    }

    alert('Form submitted! (Mock upload)')
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Upload Culture & Sensitivity Report</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Upload AST Report (PDF or Image) *</label><br />
          <input type="file" accept=".pdf,image/*" onChange={(e) => {
            if (e.target.files?.[0]) setFile(e.target.files[0])
          }} required />
        </div>

        <div>
          <label>Organism *</label><br />
          <input value={organism} onChange={(e) => setOrganism(e.target.value)} required />
        </div>

        <div>
          <label>Specimen Type *</label><br />
          <input value={specimen} onChange={(e) => setSpecimen(e.target.value)} required />
        </div>

        <div>
          <label>Site of Infection</label><br />
          <input value={site} onChange={(e) => setSite(e.target.value)} />
        </div>

        <div>
          <label>Clinical History</label><br />
          <textarea value={history} onChange={(e) => setHistory(e.target.value)} rows={4} />
        </div>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

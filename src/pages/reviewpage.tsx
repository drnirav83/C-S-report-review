// src/pages/ReviewPage.tsx
import { useSearchParams } from 'react-router-dom'

export default function ReviewPage() {
  const [searchParams] = useSearchParams()
  const reportId = searchParams.get('id')

  return (
    <main>
      <h2>AI Review: Report #{reportId}</h2>
      <p>Discrepancy analysis will be shown here based on uploaded data.</p>
    </main>
  )
}

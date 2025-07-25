// src/App.tsx
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient'
import { Header } from './components/Header'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
    </QueryClientProvider>
  )
}

export default App

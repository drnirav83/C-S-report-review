// src/App.tsx
import { Route, Switch } from "wouter"
import { Home } from "./pages/Home"
import { Upload } from "./pages/Upload"
import { Header } from "./components/Header"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/upload" component={Upload} />
        </Switch>
      </main>
    </>
  )
}

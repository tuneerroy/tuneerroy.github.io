import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'

export type Data = {
  projects: Project[]
  skills: string[]
}

export type Project = {
  name: string
  timeline: string
  description: string
  imageName: string
  stack: string[]
}

const App = () => {
  const [data, setData] = useState<undefined | Data>()
  useEffect(() => {
    fetch('info.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
        {data !== undefined ? <Projects projects={data.projects} /> : null}
      </main>
      <footer>
        <p>Last Updated June 1st, 2023.</p>
        <p>&copy; 2023 Tuneer Roy</p>
      </footer>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AllRoutes from './routes/AllRoutes'
import Header from './components/Header'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const handleGoogleLogin = ()=>{
    window.location.href = "http://localhost:8000/api/google/"
  }

  return (
    <>
      <button onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
    </>
  )
}

export default App

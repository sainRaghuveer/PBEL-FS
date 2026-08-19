import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);


  const handleGoogleLogin = ()=>{
    window.location.href = "http://localhost:8000/api/google/"
  }

  const handleLogout = ()=>{
    localStorage.removeItem("authToken")
      
    window.location.href = "http://localhost:5173/"
  }

  useEffect(()=>{
    const queryParam = new URLSearchParams(window.location.search);
    const token = queryParam.get("token");

    if(token){
      localStorage.setItem("authToken", token);

      const payloadBase64 = token.split(".")[1];

      const decodedUser = JSON.parse(atob(payloadBase64));
      setUser(decodedUser);
    }else{
      const savedToken = localStorage.getItem("authToken");
      if(savedToken){
        const payloadBase64 = savedToken.split(".")[1];
        setUser(JSON.parse(atob(payloadBase64)))
      }
    }
  }, [])

  // if(!user){
  //   return <h2>Loading user data...</h2>
  // }

  return (
    <>
      <div style={{textAlign:"center", marginTop:"60px"}}>
        <img src={user?.picture} alt="Profile_picture" style={{borderRadius:"50%", width:"100px"}}/>
        <h1>Welcome, {user?.name}</h1>
        <p>Email:- {user?.email}</p>
      </div>


      <button onClick={handleGoogleLogin}>
        Sign in with Google
      </button>

      <button onClick={handleLogout}>
        Logout
      </button>
    </>
  )
}

export default App

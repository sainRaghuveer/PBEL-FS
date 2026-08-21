import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import {io} from "socket.io-client";

const socket = io("http://localhost:8000")



function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");


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

  useEffect(()=>{
    socket.on("receive_message", (newMessage)=>{
      setMessageList((prev)=>[...prev, newMessage]);
    });

    return () =>{
      socket.off("receive_message");
    }
  });

  const handleSendMessage = () =>{
    console.log(message)
    if(message.trim()){
      const messageData = {
        sender:user ? user.name : "Anonymous",
        text:message,
        time:new Date().toLocaleTimeString(),
      };

      socket.emit("send_message", messageData);
      setMessage("");
    }


  }

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


      <hr  style={{margin:"20px 0"}}/>

      <h1>Live Chat</h1>

      <div>
        {messageList?.map((m, i)=>(
          <p key={i} style={{margin:"5px 0"}}>
            <strong>{m.sender}</strong> [{m.time}]: {m.text}
          </p>
        ))}
      </div>

      <input 
      type="text" 
      placeholder='Type your message here...'
      value={message}
      onChange={(e)=>setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </>
  )
}

export default App

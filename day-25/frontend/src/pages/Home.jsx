  import React, { useEffect, useState } from 'react'

  const Home = () =>{
    const [count, setCount] = useState(3);
    const [data, setData ] = useState([]);
    const [userData, setUserData] = useState([]);

    const fetchData = () =>{
      fetch('https://fakestoreapi.com/products/')
      .then((res)=>res.json())
      .then((data)=>setData(data))
      .catch((err)=>console.log(err))
    }

    const fetchUserData = () =>{
      fetch('https://fakestoreapi.com/users/')
      .then((res)=>res.json())
      .then((data)=>setUserData(data))
      .catch((err)=>console.log(err))
    }

    useEffect(()=>{
      fetchData();
      fetchUserData();
    }, []);


    const handleIncrement = ()=>{
      setCount(count+1)
    }

    const handleDecrement = ()=>{
      setCount(count-1)
    }

    return (
      <div>
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page content.</p>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>

        <div>
          <h3>Fetched Data:</h3>
          {userData.map((item) => (
            <div key={item.name.firstname} style={{border: '1px solid #ccc', padding: '10px', margin: '10px'}}>
              <h4>{item.name.firstname}</h4>
              <p>{item.email}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  export default Home

  //State is plain javascript object that holds information about a component's current situation. It is mutable and can be changed over time, usually in response to user actions or network responses. In React, state is managed within a component and can be updated using the setState method or the useState hook in functional components.
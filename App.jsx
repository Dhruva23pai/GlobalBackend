/*const productData=[
  {
    name:"Joystick",
    price:20,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPVxsfOFfcP8Y00HgbzDdZgujGCdVFjBk4uQ&s"
  },
  {
    name:"PS",
    price:50,
    image:"https://www.sony.co.in/image/83e724c6b5df327fc96f9c05d3ccc2ce?fmt=jpeg&wid=1200&qlt=43"
    
  }
]




export default function App()
{
  return(
    <>
    <div className="inline-center">
      <div className="inline">
    {productData.map((product)=>{
      return(
        <Sample name={product.name}
        price={product.price}
        image={product.image}
        />
      )
    })}
    </div>
    </div>
    </>
  )
}

function Sample(props){
  return(
    <>
    <div className="card">
      <div>
    <h2>Product Name:{props.name}</h2>
    <h3>Product Price:{props.price}</h3>
    <div className="image_container">
      <img src={props.image}alt="" />

    </div>
    </div>
    </div>
    </>
  )
}
import React, { useEffect } from "react";
import {useState} from "react"
export default function App(){
  const[count,setCount]=useState(0);
  const[name,setName]=useState("username");
  function handleClick(){
    setCount((prevcount)=> prevcount+1)
  }
  const[counts,setCounts]=useState(10);
  function gClick(){
    setCounts((upcomcount)=> upcomcount-1)
  }

  function defaultName(){
    setInterval(()=>{
      setName("dhr");
  },2000);
}
  function changeName(){
    setInterval(()=>{
      setName("raju");
  },2000);
}
//use effect is used for the connecting the backend issue for the 
useEffect(()=>{
  console.log("connect to backend");

},[])
  return (
    <>
    <h1> {count}</h1>
    
    <button onClick={handleClick}>Add to Cart </button>

    <h2>{counts}</h2>
    <button onClick={gClick}>delete</button>
    <br/>
    <h1>{name}</h1>
    <button onClick={defaultName}>Default</button>
    <button onClick={changeName}>change</button>
    
    </>

)
}


import Navbar from './Navbar';
import UserProvider from './UserProvider';
//import Sidebar from './Sidebar';

export default function App() {
  return (
    <>
      <UserProvider>
        <Navbar/>
        
      </UserProvider>

    </>
  )//<Sidebar/>
}

//wrapper component all has been wrapped if we want the  permission from the main.jsx file in the <></> in this options

import ThemeProvider from "./ThemeProvider";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
    <ThemeProvider>
        <Navbar />
    </ThemeProvider>
    
    
    </>
  )
}
import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
export default function App() {
  return (
    <>
    <Signin/>
    <Signup/>
    <Home/>
    </>
  )
}

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import Signin from './Signin';
import Signup from './Signup';
import Home from './Home';


export default function App() {
  const [toggle, setToggle] = useState(false); // Toggle state
  const navigate = useNavigate(); // For navigation between pages

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle); // Toggle the state
    navigate(toggle ? '/signin' : '/home'); // Navigate to appropriate page
  };

  return (
    <>
      <div style={{ padding: '10px' }}>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: toggle ? '#28a745' : '#dc3545',
            color: '#FFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleToggle}
        >
          {toggle ? 'Go to Signin' : 'Show Home & Profile'}
        </button>
      </div>

      <div style={{ padding: '20px' }}>
        <Routes>
          { When Toggle is True: Display Signin }
          {toggle && <Route path="/signin" element={<Signin />} />}
          {toggle && <Route path="/signup" element={<Signup />} />}

          { When Toggle is False: Display Home and Profile }
          {!toggle && <Route path="/home" element={<Home />} />}
          {!toggle && <Route path="/profile" element={<Profile />} />}
        </Routes>

        { Display Home and Profile on the Same Page }
        {!toggle && (
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
            <div style={{ width: '45%' }}>
              <Home />
            </div>
            <div style={{ width: '45%' }}>
              <Profile />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
*/

    //axios method name we want ("/")is using get so we r using it
  
  /*const [username, setUsername] = useState(""); // Correct use of useState

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username);
  }

  /*<form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="submit" />
      </form>



import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const randomName= "sadfsew";
  const[details,setDetails]=useState("");
  async function handleClick() {
    const response= await axios.get("http://localhost:3000/sample",randomName);

  

  console.log(response);
  console.log(response.status);
  setDetails(response.data)
  console.log(request);
}

  return (
    <>
      <button onClick={handleClick}>fetch details </button>
      <h1>{details}</h1>
    </>
  );
}

 
// frontend code username
import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [randomName, setRandomName] = useState(""); // Input for the name
  const [details, setDetails] = useState("");

  async function handleClick() {
    try {
      const response = await axios.post("http://localhost:3000/sample", {
        randomName,
      });
      console.log(response);
      console.log(response.status);
      setDetails(response.data); // Show the response
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter name"
        value={randomName}
        onChange={(e) => setRandomName(e.target.value)}
      />
      <button onClick={handleClick}>Fetch Details</button>
      <h1>{details.randomName}</h1>
    </>
  );
}


//from frontend to backend
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Function to register a user
  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3000/register", {
        username,
        password,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "An error occurred during registration"
      );
    }
  };

  // Function to log in a user
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      setMessage(`Login Successful! Token: ${response.data.token}`);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "An error occurred during login"
      );
    }
  };

  return (
    <div>
      <h1>User Authentication</h1>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>

      {message && <p>{message}</p>}
    </div>
  );
}


// form frontend to backend and store to  mango database

import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handle Registration
  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3000/register", {
        username,
        password,
      });
      setMessage(response.data.message); // Display success message
    } catch (error) {
      setMessage(
        error.response?.data?.message || "An error occurred during registration"
      );
    }
  };

  return (
    <div>
      <h1>Register User</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleRegister}>Register</button>
      {message && <p>{message}</p>}
    </div>
  );
}

// create 2 routes in frontend login route from backend you have to get true/false true means home page false means loginpage
// connect to backend with route post"/" send a boolean message res.json({success:true})
// create route for signin and home
// send the username from frontend search username from database check both username if both are some send true from backend or else false 

import Home from './Home';
import Signin from './Signin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
  const [isAuth, setAuth] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {isAuth ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<Signin />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}
*/
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  // Handle sign-in
  const handleSignin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/signin", {
        username,
      });

      // Check the success status from the response
      if (response.data.success) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error during signin:", error);
      setIsAuthenticated(false);
    }
  };

  return (
    <div>
      {isAuthenticated === null ? (
        <div>
          <h1>Sign In</h1>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleSignin}>Sign In</button>
        </div>
      ) : isAuthenticated ? (
        <div>
          <h1>Home Page</h1>
          <p>Welcome, {username}!</p>
        </div>
      ) : (
        <div>
          <h1>Sign In</h1>
          <p>Invalid username. Please try again.</p>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleSignin}>Sign In</button>
        </div>
      )}
    </div>
  );
}

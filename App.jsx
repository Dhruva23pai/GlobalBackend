
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

import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  // Handle sign-in
  const handleSignin = async () => {
    try {
      // Send the username to the backend
      const response = await axios.post("http://localhost:3000/signin", {
        username,
      });

      // Always navigate to the home page on success
      if (response.data.success) {
        setIsAuthenticated(true);
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
      ) : (
        <div>
          <h1>Home Page</h1>
          <p>Welcome, {username}!</p>
        </div>
      )}
    </div>
  );
}

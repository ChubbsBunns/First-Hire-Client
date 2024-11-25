import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");
    console.log("Stored email is " + storedEmail)
    console.log("Stored token is " + storedToken)
    setToken(storedToken);
    setEmail(storedEmail);
    setLoading(false); 
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, loading, email, setEmail }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
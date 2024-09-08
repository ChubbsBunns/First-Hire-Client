import React, {useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext'; // Adjust the path as needed
const UserTest = () => {
    const { email, token, loading } = useContext(AuthContext);
    const [displayEmail, setEmail] = useState(null)


    useEffect(() => {
        if (email != undefined && email !=null) {
            console.log("The email is now set to ")
            console.log(email)
            setEmail(email)
        } else {
            console.log("The email is undefined")
            setEmail("Undefined")
        }
    },[email])

    if (loading) {
      return <div>Loading...</div>; // Optionally handle loading state
    }

    
    if (email == null || email==undefined) {
        return (
            <div>
              <h1>User Profile</h1>
              <p>Email: {displayEmail}</p>
              <p>Token: {token ? token : 'No token found'}</p>
            </div>
          );
    } else {
        return (
            <div>
              <h1>USER RENDERED CORRECTLY</h1>
              <p>Email: {displayEmail}</p>
              <p>Token: {token ? token : 'No token found'}</p>
            </div>
          );
    }

  };

export default UserTest

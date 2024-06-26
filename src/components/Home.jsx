import React, { useEffect } from 'react'
import {auth} from "../firebase"
import {useNavigate} from "react-router-dom"
import {signOut} from "firebase/auth"
function Home() {

    const navigate = useNavigate()
    useEffect(() => {
        if(auth.currentUser == null || auth.currentUser.emailVerified == false){
            navigate("/Authentication_React/login");
        }
    }, []);

    const logout = async () => {
        try{
            await signOut(auth);
            navigate("/Authentication_React/login");
        }
        catch (err) {
            alert(err.message);
        }
        
    }
  return (
    <div>
        <h1>Home</h1>
    {auth.currentUser ? <div>{auth.currentUser.email} 
    <button onClick={logout}>Logout</button>
    </div> : "" 


    
    }
        <br />
    <a href="/"></a>
    <button>Signup</button>

    </div>
  )
}

export default Home
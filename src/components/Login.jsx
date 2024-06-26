import  { useState } from "react";
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from '../firebase'
import { useNavigate } from "react-router-dom";
function Login() {

    const [email, setEmail] = useState("");
    const [pass, setPass]  = useState("");

    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth, email, pass);
            alert("Login Success");
            navigate("/Authentication_React/home")
        } catch(err){
            alert(err.message);
        }
    }

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={login}>
        <br />
        <input onChange={(e) => setEmail(e.currentTarget.value)} type="text" placeholder="email"/>
        <br />
        <input onChange={(e) => setPass(e.currentTarget.value)} type="password" placeholder="password"/>
        <br />
        <input type="submit" value="login"/>
      </form>
      <p>Change the path to /login or /signup or /</p>
    </div>
  );
}

export default Login;

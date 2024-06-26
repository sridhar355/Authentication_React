import { useState } from "react";
import {createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import {auth} from "../firebase";

function Signup() {

    const [email, setEmail] = useState("");
    const [pass, setPass]  = useState("");

    const signup = async (e) => {
        e.preventDefault();
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
            await sendEmailVerification(userCredential.user)
            alert("Email verification link sent");
        }
        catch (err) {
            alert(err.message);
        }

        
    };

  return (
    <div>
      <h1>signup</h1>
      <form onSubmit={signup}>
        <br />
        <input onChange={(e) => setEmail(e.currentTarget.value)} type="text" placeholder="email"/>
        <br />
        <input onChange={(e) => setPass(e.currentTarget.value)} type="password" placeholder="password"/>
        <br />
        <input type="submit" value="signup"/>
      </form>
    </div>
  );
}

export default Signup;

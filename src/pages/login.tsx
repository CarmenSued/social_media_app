import {auth, provider} from '../config/firebase';
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';;

export const Login =()=>{
 // useNavigate hook to navigate to the home page
const navigate = useNavigate();

// Sign in with Google funtion  
const signInWithGoogle = async ()=>{
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate('/');
};

    return (
        <div> 
            <p>Sign up with Google to Continue</p>
            <button onClick={signInWithGoogle}> Sign in With Google</button>
        </div>
    );
};
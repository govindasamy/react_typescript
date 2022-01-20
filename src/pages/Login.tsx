import React from "react";
import {auth , provider}  from '../firebase';
import classes from './Login.module.css';
import GoogleLoginIcon from '../assets/GoogleLoginIcon.png'

const signInwithGoogle = ()=>{
    auth.signInWithPopup(provider)
    .then((res:any)=>{
      console.log("login response", res);
    }).catch(alert);
  }

const Login : React.FC = () => {
    return(
        <div className={classes.container}>
            <button
                    className={classes.loginButton}
                    onClick={()=>signInwithGoogle()}> 
                <img src={GoogleLoginIcon} className={classes.GoogleLoginIcon} /> 
                <p className={classes.GoogleLoginButtonText}>Sign In With Google</p> 
            </button>
        </div>
    )
}

export default Login;
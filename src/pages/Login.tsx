import React from "react";
import {auth , provider}  from '../firebase';
import classes from './Login.module.css';
import GoogleLoginIcon from '../assets/GoogleLoginIcon.png'
import { type } from "os";

type childProps = {
    onClick?: () => void
}

const Login : React.FC<childProps> = ({
    onClick=()=>{}
}) => {
    const signInwithGoogle = ()=>{
    auth.signInWithPopup(provider)
    .then((res:any)=>{
      console.log("login response", res);
      console.log("token", res.credential.accessToken);
      localStorage.setItem('authToken',  res.credential.accessToken);
      localStorage.setItem('userProfilePic', res.additionalUserInfo.profile.picture);
      localStorage.setItem('userName', res.additionalUserInfo.profile.name);
      onClick();
    }).catch(alert);
  }
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
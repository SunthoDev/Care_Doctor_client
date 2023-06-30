import React, { useContext, useState } from 'react';
import "./Login.css"
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import login from "../../../assets/images/login/login.svg"
import { AuthContext } from '../AuthProvider/AuthProvider';
import title from '../../../hook/useTitle';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    // /dynamic title use 
    title("Login")

    // location use navigate 
    let location=useLocation()
    let navigate=useNavigate()
    let from=location.state?.from?.pathname || "/"

    // authProvider received 
    let {loginUser,googleLogin}=useContext(AuthContext)

    // success error handle state  
    let[success,setSuccess]=useState("")
    let[error,setError]=useState("")


    // from value email login part  

    let handleInputData=(event)=>{
        event.preventDefault()
        let emailValue=event.target.email.value
        let passwordValue=event.target.password.value
        setSuccess("")
        setError("")

        // email pass login state 
        loginUser(emailValue,passwordValue)

        .then(result=>{
            let user=result.user 
            console.log(user)
            setSuccess("Your Login Successfully")
            event.target.reset()
            navigate(from)
        })

        .then(error=>{
            // console.log(error.message)
            setError(error.message)
        })

    }



    // google login 
    let googleProvider = new GoogleAuthProvider();

    let handleGoogleLogin=()=>{

        googleLogin(googleProvider)
        .then(result=>{
            let googleUser=result.user
            console.log(googleUser)
            navigate(from)
        })
        .then(error=>{
            let googleError=error.message
            console.log(googleError)
        }) 
    }



    return (
        <div className='Login mb-14'>
            <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row  ">

                    <div className="text-center  lg:text-left pr-10  w-1/2">
                        <img src={login} alt="" />
                    </div>
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login now!</h1>
                            <form onSubmit={handleInputData}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <h2 className='text-red-500'>{error}</h2>
                                    <h2 className='text-green-500'>{success}</h2>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>


                            <div className="others mt-4">

                                <h2>or sing In with</h2>
                                <div className="icon py-4">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                    <button><i class="fa mx-4 fa-github" aria-hidden="true"></i></button>
                                    <button onClick={handleGoogleLogin}> <i class="fa fa-google" aria-hidden="true"></i></button>
                                
                                </div>

                                <h3>Have an account? <span><Link to="/singUp">Sign Up</Link></span></h3>

                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    );
};

export default Login;















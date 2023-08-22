import React, { useContext, useState } from 'react';
import "./Singup.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from "../../../assets/images/login/login.svg"
import { AuthContext } from '../AuthProvider/AuthProvider';
import title from '../../../hook/useTitle';

const SingUp = () => {


    title("Register")

    let location=useLocation()
    let navigate=useNavigate()
    let from=location.state?.from?.pathname || "/"

    let {createUser}=useContext(AuthContext)

    let[success,setSuccess]=useState("")
    let[error,setError]=useState("")

    let handleInputData = (event) => {
        event.preventDefault()
        setError("")
        setSuccess("")
        let nameValue = event.target.name.value
        let emailValue = event.target.email.value
        let photoValue = event.target.photo.value
        let passwordValue = event.target.password.value
        let confirmPass = event.target.confirm.value
        if (passwordValue !== confirmPass) {
            setError("Please Meatch Your Password")
            return
        }
        // console.log(nameValue, emailValue,photoValue,passwordValue,confirmPass)
        createUser(emailValue,passwordValue)
        .then(result=>{
            let user=result.user
            setSuccess(" Your SingUp Successfully ")
            event.target.reset()
            navigate(from)
        })
        .catch(error=>{
            console.log(error)
            setError(error)
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
                            <h1 className="text-3xl text-center font-bold">Sing Up!</h1>
                            <form onSubmit={handleInputData}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" name='name' placeholder="email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name='confirm' placeholder="Confirm password" className="input input-bordered" />
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
                                    <i class="fa mx-4 fa-github" aria-hidden="true"></i>
                                    <i class="fa fa-google" aria-hidden="true"></i>
                                </div>

                                <h3>Have an account? <span><Link to="/login">Sign In</Link></span></h3>
                                
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    );
};

export default SingUp;
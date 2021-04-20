import React, { useContext } from 'react';
import './Login.css'
import LoginBg from '../../images/loginBg.jpg'
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome } from '@fortawesome/free-solid-svg-icons';

// // Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // AllProviders
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();

    // SignWithGoogle
    const signInGoogle = () => {
        firebase.auth()
            .signInWithPopup(GoogleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const userLogin = { name: displayName, email };
                setUser(userLogin);
                storeAuthToken();
                history.replace(from)

            })
            .catch((error) => {
                const errorMessage = error.message;
                setUser(errorMessage)
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }


    return (
        <div className="row mt-2 pt-2 d-flex align-items-center">
             <div className="log-home mt-2 mb-3">
                    <Link to="/home"> <h5> <FontAwesomeIcon className="  ms-3 " icon={faHome} /> Sea Skiing </h5></Link>
                </div>

            <div className="col-md-5 col-sm-1 offset-md-1 login-container text-center p-5 mb-5 " >
                 <h4 className=" login-head">Login</h4>
                <small className="text-danger"> Email & Password Login Not Working , just Showoff.</small>
            
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div>
                        <input className="form-control inputs" type="email" name="email" placeholder="Your Email" {...register('email')} required />

                    </div>

                    <div>
                        <input className="form-control mt-2 inputs" type="password" name="password" placeholder="Your Password" {...register('password')} required />


                    </div>

                    <input className="mt-3 login-btn" type="submit" value="Sign in" />
                </form>
                <div className="mt-3">
                    <h4 className="or">Or</h4>
                    {/* <button onClick={signInFacebook} className="buttons"> Continue With facebook</button><br /> */}
                    <button onClick={signInGoogle} className="buttons mt-2"> Continue With Google</button>
                </div>

            </div>

            <div className="col-md-5 ml-4 col-sm-1  ">

                <img src={LoginBg} alt="" className="img-fluid login-BG" />
            </div>

        </div>
    );
};

export default Login;
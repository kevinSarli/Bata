import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {startGoogleLogin, startLoginEmailPass} from "../actions/auth"
import { useForm } from "../hooks/useForm";
import { getFirestore } from "firebase/firestore";


const Login = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const {email,password} = formValues

    const handleLogin = (e)=>{
        e.preventDefault()
        dispatch(startLoginEmailPass(email,password))    
      }

      const handleGoogleLogin = ()=>{
        dispatch(startGoogleLogin())
      }
  return (
    <>
      <h3 className="auth__title">Iniciar sesión</h3>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-primary btn-block"
        >
          Ingresar
        </button>

        <div className="auth__social-networks">
          <p>Ingresá con tu red social</p>

          <div className="google-btn" 
          onClick={handleGoogleLogin}
          >
            
           <div className="google-icon-wrapper">
             <button>

              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
                />
                </button>
            </div>
            <p className="btn-text">
              <b>Iniciá sesioń con google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register" className="link">
          Creá tu cuenta
        </Link>
      </form>
    </>
  );
};

export default Login;

import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { startRegisterWithEmailPasswordName } from '../actions/auth';
import { useForm } from '../hooks/useForm'





const Register = () => {

    const dispatch = useDispatch();



    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault()
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
      
    }

  return (
    <>
      <h3 className="auth_title mb5">Register</h3>
      
      <form 
      onSubmit={handleRegister}
      >



<input 
    type="text"
    placeholder="Name"
    name="name"
    className="auth__input"
    autoComplete="off"
    value={name}
    onChange={handleInputChange}
/>

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
    onChange={handleInputChange}
/>



<button
    type="submit"
    className="btn btn-primary btn-block mb-5"
>
    Registrar
</button>



<Link 
    to="/auth/login"
    className="link"
>
    ¿Estás registrado/a?
</Link>

</form>
    </>
  )
}

export default Register
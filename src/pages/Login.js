import React from 'react'
import { FaUsers } from 'react-icons/fa'
import './Login.css'

 
const Login = () => {
  return (
    <div className='authContainer'>
      <form>
          <FaUsers className='authIcon'/>
          <h1>Connexion</h1>
          <div className='inputContainer'>
              <input  
                type='text'
                name='username'
                className='form-control'
                id='email' 
                placeholder="Adresse mail"
                autoComplete="off"
                required
              /> 

              <input
                type="password"
                name='password'
                className='form-control'
                id='password'
                placeholder='Mot de passe'                   
                required
              />

              <button className='buttonAuth' type='submit'  value="login">Se connecter</button>
          </div>
          <div className='forgotPassword'>
            <h3>Mot de passe oublié ? 
              <a href='#'>Cliquez-ici</a>
            </h3>
          </div>
      </form>
    </div>
  )
}

export default Login
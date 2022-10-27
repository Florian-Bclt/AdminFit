import React, { useState } from 'react'
import { FaUsers } from 'react-icons/fa'
import './Login.css'

 
const Login = ({ loginUser }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = event => {
    event.preventDefault();
    loginUser(login, password)
  };
  
  return (
    <div className='authContainer'>
      <form onSubmit={onLogin}>
          <FaUsers className='authIcon'/>
          <h1>Connexion</h1>
          <div className='inputContainer'>
              <input  
                type='text'
                className='form-control'
                value={login} 
                placeholder="Adresse mail"
                autoComplete="off"
                onChange={event => setLogin(event.currentTarget.value)}
                required
              /> 

              <input
                type="password"
                className='form-control'
                placeholder='Mot de passe' 
                value={password}
                onChange={event => setPassword(event.currentTarget.value)}                  
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
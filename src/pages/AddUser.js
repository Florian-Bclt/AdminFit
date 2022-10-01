import React, { useState } from 'react'
import "./AddUser.css";
import axios from 'axios';
import Menu from '../components/Menu';
import { FaUserEdit } from "react-icons/fa";

function AddUser() {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify({
    "login": "variable de login this.user",
    "password": "this.pwd"
  });
  
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://localhost:8000/users", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/signup', {
      name: lastname,
      firstname: firstname,
      email: email,
      password: password,
      city: city,
    })
    .then((res) => {
      console.log(res)
      setSuccess(success.response.data.message)
    })
    .catch((err) => {
      setError(err.response.data.message)
    })
  }

  return (
    <div className='dashboard'>
      <Menu />
      <form className='create-user-form' onSubmit={handleSubmit}>
        <h1>Création de partenaire</h1>
        <div className='form-section'>
          <p>Nom</p>
          <input 
            required
            type='text'
            value={lastname}
            onChange={(e)=>{
              setLastname(e.target.value)
            }}
          />
          <p>Prénom</p>
          <input 
            required
            type='text'
            value={firstname}
            onChange={(e)=>{
              setFirstname(e.target.value)
            }}
          />
          <p>Email</p>
          <input 
            required
            type='email'
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
          <p>Mot de passe</p>
          <input 
            required
            type='password'
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          />
          <p>Ville de la structure</p>
          <input 
            required
            type='text'
            value={city}
            onChange={(e)=>{
              setCity(e.target.value)
            }}
          />
          <button type='submit' className='buttonAuth'>Créer</button>
        </div>
      </form> 
        <div className='add-picture'>
          <i><FaUserEdit /></i>
          <button type='submit' className='buttonAuth'>Modifier image</button>
        </div>
      <h4>{error}</h4>
    </div>

  )
}

export default AddUser
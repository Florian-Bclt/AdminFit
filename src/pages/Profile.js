import React from 'react'
import Menu from '../components/Menu'
import './Profile.css'
import Toggle from '../components/Toggle'
import seller3 from '../img/seller3.jpg'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'


function Profile() {
  return (
    <div className='dashboard'>
      <Menu />
      <section className='profileSection'>
        <div className='social-attribut'>
          <img src={seller3} alt="profil image" /> 
          <h1>data_Pseudo</h1>
          <h2>data_description Je me presente je s'appelle groot, 
              j'aime me balader dans la galaxie pour détruire tout ce que je trouve 
              sauf les fleurs que je trouve jolie.</h2>
          <button className='button2'>Message</button>
          <div className='social_link'>
          <i><FaFacebook /> id_facebook</i>
          <i><FaLinkedinIn /> id_Linkedin</i>
          <i><BsInstagram /> id_Instagram</i>
          </div>
        </div>
      </section>
      <section> 
        <div className='informations'>
          <div className='attributs'>
            <h4>Nom Prénom </h4>
            <h4>Email</h4>
            <h4>Téléphone</h4>
            <h4>Adresse</h4>
            <h4>Structure</h4>
          </div>
          <div className='data_profile'>
            <h4>id_username</h4>
            <h4>id_mail</h4>
            <h4>id_phone</h4>
            <h4>id_adress</h4>
            <h4>id_structure</h4>
          </div>

        </div>
        <div>
          <div className='privilege'>
            <div className='privilege_attributs'>
              <h4>id_privilege</h4>
              <h4>id_privilege</h4>
              <h4>id_privilege</h4>
              <h4>id_privilege</h4>
              <h4>id_privilege</h4>
              <h4>id_privilege</h4>

            </div>
            <div className='toggle'>
              <Toggle />
              <Toggle />
              <Toggle />
              <Toggle />
              <Toggle />
              <Toggle />
              <Toggle />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
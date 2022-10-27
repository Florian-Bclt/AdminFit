import React from "react";
import "./MainContainer.css";
import Banner from "../img/banner.jpg";
import CardMain from "./CardMain";
import MainRightTopCard from "./MainRightTopCard";
import MainRightBottomCard from "./MainRightBottomCard";
import { BiSearchAlt } from "react-icons/bi";
import { FaUserPlus} from 'react-icons/fa';
import { Link } from "react-router-dom";
import IMG1 from '../img/seller1.jpg';
import IMG2 from '../img/seller2.jpg';
import IMG3 from '../img/seller3.jpg';
import IMG4 from '../img/seller4.jpg';
import IMG5 from '../img/seller5.jpg';
import IMG6 from '../img/seller6.jpg';

function MainContainer() {

  const data = [
    {id: 1, image: IMG2, username: "Mathis Mallet", hearts: 65, city:'Rouen', speciality:'Crossfit'},
    {id: 2, image: IMG1, username:"Océane Robineau", hearts:72, city:'Amiens', speciality:'RPM'},
    {id: 3, image: IMG3, username: "Bastien Morel", hearts:62, city:'Paris', speciality:'Crossfit'},
    {id: 4, image: IMG4, username: "Sara Tremblay", hearts:58, city:'Rouen', speciality:'Aquabyke'},
    {id: 5, image: IMG5, username: "Ninon Michaux", hearts:10, city:'Lyon', speciality:'Crossfit'},
    {id: 6, image: IMG6, username: "Sabine Choquet", hearts:15, city:'Rouen', speciality:'Boxes'},
    {id: 7, image: IMG2, username: "Mathis Mallet", hearts: 65, city:'Strasbourg', speciality:'Step'},
    {id: 8, image: IMG1, username:"Océane Robineau", hearts:72, city:'Rouen', speciality:'Gym'},
    {id: 9, image: IMG3, username: "Bastien Morel", hearts:62, city:'Eu', speciality:'Crossfit'},
    {id: 10,image: IMG4, username: "Sara Tremblay", hearts:58, city:'Bordeaux', speciality:'Renforcement'},
    {id: 11,image: IMG5, username: "Ninon Michaux", hearts:10, city:'Marseille', speciality:'Crossfit'},
    {id: 12,image: IMG6, username: "Sabine Choquet", hearts:15, city:'Rouen', speciality:'RPM'},
  ]


  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="textContainer">
            <h1>Admin-Fit</h1>
            <h2>S'entrainer</h2>
            <p>C'est avant tout, trouver une salle !</p>
            <div className="structure">
              <Link to='/structure' className="button">
                Chercher une structure
              </Link>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="partners">
              <h2>Partenaires</h2>
              <Link to='/create-user' className="button">
                  <FaUserPlus/>
              </Link>
            </div>
            <div className="filter_buttons">
              <a href="#" className="button">
                Tous
              </a>
              <a href="#" className="button2">
                Actif
              </a>
              <a href="#" className="button2">
                Inactif
              </a>
                <a className=" button2 inputBox">
                  <input 
                    type="text" 
                    placeholder="Rechercher" 
                    name="searchBar" 
                    id="searchBar"/>
                  <i>
                    <BiSearchAlt />
                  </i>
                </a>
              </div>
          </div>

          <main>
            {data.map(({id, image, username, hearts, city, speciality}) => 
                <CardMain 
                  image={image} 
                  username={username} 
                  hearts={hearts} 
                  city={city}
                  speciality={speciality}
                />
            )}
          </main>
        </div>
      </div>
      <div className="right">
        <MainRightTopCard />
        <MainRightBottomCard />
      </div>
    </div>
  );
}

export default MainContainer;

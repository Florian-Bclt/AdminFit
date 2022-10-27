import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import Toggle from './Toggle';
import { confirmAlert } from 'react-confirm-alert';
import { Link } from 'react-router-dom';

function CardMain({ image, username, hearts, city, speciality }) {

  const [toggled, setToggled] = useState(false);

  
  return (
    <div className="card_main">
        <img src={image} alt="" className="card_main_img" />
        <div className="card_main_name">
          <h2>{username}</h2>
          <div className="card_main_icon">
            <i>
              <BsFillHeartFill /> <span>{hearts}</span>
            </i>
          </div>
        </div>

        <div className="stat">
          <div>
            <p>
              Structure<span>{city}</span>
            </p>
          </div>
          <div>
            <p>
              Spécialité<span>{speciality}</span>
            </p>
          </div>
        </div>

        <div className="card_main_button">
          <Link to="/profile" className="button btn">
            En savoir plus
          </Link>
          <Toggle onChange={(event) => setToggled(event.target.checked)} />
          <h3>{toggled ? "Actif" : "Inactif"} </h3>          
        </div> 
      </div>
  );
}

export default CardMain;

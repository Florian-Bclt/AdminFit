import React, { useEffect } from "react";
import { FaChevronDown, FaEnvelope, FaUserEdit, FaUnlockAlt, FaSignOutAlt } from "react-icons/fa";
import Profil from "../img/profil.jpg";
import './TopContainer.css';

function TopContainer() {
  useEffect(() => {
    const mouseTarget = document.getElementById("menuChevron");
    const menuContainer = document.getElementById("menuContainer");
    mouseTarget.addEventListener("mouseenter", () => {
      mouseTarget.style.transform = "rotate(180deg)";
      menuContainer.style.transform = "translateX(0px)";
    });

    menuContainer.addEventListener("mouseleave", () => {
      mouseTarget.style.transform = "rotate(0deg)";
      menuContainer.style.transform = "translateX(300px)";
    });
  }, []);

  return (
    <div className="topContainer">
      <h1>Bonjour, Florian</h1>

      <div className="profileContainer">
        <i className="profileIcon">
          <FaEnvelope />
        </i>
        <div className="profileImage">
          <img src={Profil} alt="" />
        </div>
        <p className="profileName">Florian Bouclet</p>
        <i className="menuChevron" id="menuChevron">
          <FaChevronDown />
        </i>

        <div className="menuContainer" id="menuContainer">
          <ul>
            <li>Photo de profil <i><FaUserEdit /></i></li>
            <li>Mot de passe <i><FaUnlockAlt/></i></li>
            <li>Se déconnecter <i><FaSignOutAlt/></i></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;

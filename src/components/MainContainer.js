import React from "react";
import "./MainContainer.css";
import Banner from "../img/banner.jpg";
import CardMain from "./CardMain";
import seller1 from "../img/seller1.jpg";
import seller2 from "../img/seller2.jpg";
import seller3 from "../img/seller3.jpg";
import seller4 from "../img/seller4.jpg";
import seller5 from "../img/seller5.jpg";
import seller6 from "../img/seller6.jpg";
import MainRightTopCard from "./MainRightTopCard";
import MainRightBottomCard from "./MainRightBottomCard";
import { BiSearchAlt } from "react-icons/bi";
import { FaUserPlus} from 'react-icons/fa';
import { Link } from "react-router-dom";

function MainContainer() {

  // state = {
  //   partners: [
  //     {id: 1, imgSrc: {seller2}, name: "Mathis Mallet", hearts: "65"},
  //     {id: 2, imgSrc: {seller1}, name:"Océane Robineau", hearts:"72"},
  //     {id: 3, imgSrc: {seller3}, name: "Bastien Morel", hearts:"62"},
  //     {id: 4, imgSrc: {seller4}, name: "Sara Tremblay", hearts:"58"},
  //     {id: 5, imgSrc: {seller5}, name: "Ninon Michaux", hearts:"10"},
  //     {id: 6, imgSrc: {seller6}, name: "Sabine Choquet", hearts:"15"}
  //   ]
  // }

  
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
                <CardMain imgSrc={seller2} name={"Mathis Mallet"} hearts={"65"} />
                <CardMain imgSrc={seller1} name={"Océane Robineau"} hearts={"72"} />
                <CardMain imgSrc={seller3} name={"Bastien Morel"} hearts={"62"} />
                <CardMain imgSrc={seller4} name={"Sara Tremblay"} hearts={"58"} />
                <CardMain imgSrc={seller5} name={"Ninon Michaux"} hearts={"10"} />
                <CardMain imgSrc={seller6} name={"Sabine Choquet"} hearts={"15"} />
                <CardMain imgSrc={seller5} name={"Ninon Michaux"} hearts={"10"} />
                <CardMain imgSrc={seller6} name={"Sabine Choquet"} hearts={"15"} />
                <CardMain imgSrc={seller2} name={"Mathis Mallet"} hearts={"65"} />
                <CardMain imgSrc={seller1} name={"Océane Robineau"} hearts={"72"} />
                <CardMain imgSrc={seller3} name={"Bastien Morel"} hearts={"62"} />
                <CardMain imgSrc={seller4} name={"Sara Tremblay"} hearts={"58"} />
                <CardMain imgSrc={seller5} name={"Ninon Michaux"} hearts={"10"} />
                <CardMain imgSrc={seller6} name={"Sabine Choquet"} hearts={"15"} />
                <CardMain imgSrc={seller5} name={"Ninon Michaux"} hearts={"10"} />
                <CardMain imgSrc={seller6} name={"Sabine Choquet"} hearts={"15"} />
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

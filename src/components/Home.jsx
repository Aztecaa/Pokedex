import React, { useEffect, useState } from "react";
import { changeTrainer } from "../store/slice/trainerName.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dragonite from "../../img/Dragonite.png";
import "../styles/Home.css";

const Home = () => {
  const [trainerName, setTrainerName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch(changeTrainer(trainerName));
    navigate("/pokedex");
  };

  return (
    <div className="homeContainer">
      <h1>Welcome trainer!</h1>
      <img src={Dragonite} alt="" />
      <form onSubmit={submit}>
        <input className="inputHome"
          placeholder="Trainer name... "
          type="text"
          value={trainerName}
          onChange={(e) => setTrainerName(e.target.value)}
        />
        <button className="buttonHome">Submit</button>
      </form>
    </div>
  );
};

export default Home;

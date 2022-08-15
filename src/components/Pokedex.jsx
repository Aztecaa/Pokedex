import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import "../styles/Pokedex.css";

const Pokedex = () => {
  const trainerName = useSelector((state) => state.trainerName);

  const [pokemons, setPokemons] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [types, setTypes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemons(res.data.results));

    axios
      .get(`https://pokeapi.co/api/v2/type`)
      .then((res) => setTypes(res.data.results));
  }, []);

  // console.log(types)

  const search = (e) => {
    e.preventDefault();
    navigate(`/PokemonDetail/${searchValue}`);
  };

  const typeFilter = (e) => {
    axios.get(e.target.value).then((res) => setPokemons(res.data.pokemon));
  };

  return (
    <div>
      <div className="pokedex">
        <h1>Pokedex</h1>
        <p>
          Bienvenido <b>{trainerName}!</b>
        </p>
      </div>
      <div className="pokedexInputs">
      <form onSubmit={search}>
        <input className="inputPokedex"
        placeholder="ID, name..."
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="buttonPokedex">Search</button>
      </form>

      <select className="selectPokedex" onChange={typeFilter}>
        {types.map((type) => (
          <option value={type.url} key={type.name}>
            {type.name}
          </option>
        ))}
      </select>
      </div>

      <div className="PokedexContainer">
        {pokemons.map((pokemon) => (
          <PokemonCard
            url={pokemon.url ? pokemon.url : pokemon.pokemon?.url}
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/PokemonDetail.css";

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
  }, []);

  console.log(pokemon);

  return (
    <div className="PokemonDetail">
      <div className="pokedex">
        <h1>PokemonDetail</h1>
        <button>Return</button>
      </div>
      <h2 className="pokemonName">{pokemon?.name}</h2>
      <h3>
        <b>#{pokemon.id}</b>
      </h3>
      <div className="pokemonContainer">
        <img src={pokemon?.sprites?.other.dream_world.front_default} alt="" />
        <div className="pokemonInfo">
          <h3>Weight: {pokemon.weight}</h3>
          <h3>height: {pokemon.height}</h3>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;

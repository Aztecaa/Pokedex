import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ url }) => {
  
  const [pokemon, setPokemon] = useState();
  
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url)
    .then((res) => setPokemon(res.data));
  }, []);

  return (
    <article className="pokemonCard" onClick={() => navigate(`/pokemonDetail/${pokemon.id}`)}>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites?.front_default} alt="" />
    </article>
  );
};

export default PokemonCard;

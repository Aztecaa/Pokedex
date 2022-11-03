import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data))
  }, [])

  console.log(pokemon)

  return (
    <article
      className="pokemonCard brd-10"
      onClick={() => navigate(`/pokemonDetail/${pokemon.id}`)}
    >
      <div className="cardContent">
        <h2>{pokemon?.name}</h2>
        <img src={pokemon?.sprites?.front_default} alt="pokemonSprite" />
      </div>
    </article>
  )
}

export default PokemonCard

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../styles/PokemonDetail.css'

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState([])
  const [pokemonTypes, setPokemonTypes] = useState({})

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data))
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemonTypes(res.data.types))
  }, [])

  console.log(pokemon)
  
  return (
    <section className="PokemonDetail">
      <div className="pokedex bg-red">
        <h1>PokemonDetail</h1>
        <button onClick={() => navigate(`/pokedex`)}>Return</button>
      </div>
      <h2 className="pokemonName">
        {pokemon.name}
      </h2>
      <h3>
        <b>#{pokemon.id}</b>
      </h3>
      <div className="pokemonContainer">
        <div className="containImg">
          <img
            src={pokemon?.sprites?.other.dream_world.front_default}
            alt="pokemonSprite"
          />
          <div className="types d-flex">
            <h4 className="brd-10 bg-red">{pokemonTypes[0]?.type.name}</h4>
            <h4 className="brd-10 bg-red">{pokemonTypes[1]?.type.name}</h4>
          </div>
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laboriosam sit officiis nulla quibusdam fugit! Minima unde sint,
            similique sit laudantium accusamus nam ad inventore modi laborum
            numquam, aliquam tempora?
          </p>
        </div>
        <div className="pokemonInfo">
          <h3>Weight: {pokemon.weight} kg</h3>
          <h3>height: {pokemon.height} m</h3>
        </div>
      </div>
    </section>
  )
}

export default PokemonDetail

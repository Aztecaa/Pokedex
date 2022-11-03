import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PokemonCard from './PokemonCard'
import '../styles/Pokedex.css'

const Pokedex = () => {
  const trainerName = useSelector((state) => state.trainerName)

  const [pokemons, setPokemons] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [types, setTypes] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => setPokemons(res.data.results))

    axios
      .get(`https://pokeapi.co/api/v2/type`)
      .then((res) => setTypes(res.data.results))
  }, [])

  const search = (e) => {
    e.preventDefault()
    navigate(`/PokemonDetail/${searchValue}`)
  }

  const typeFilter = (e) => {
    axios.get(e.target.value).then((res) => setPokemons(res.data.pokemon))
  }

  return (
    <section>
      <div className="pokedex bg-red">
        <h1>Pokedex</h1>
        <p>
          Bienvenido <b>{trainerName}!</b>
        </p>
      </div>

      <div className="searchBar d-flex">
        <form>
          <button className="btnSearch bg-red brd-style" onClick={search}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            className="inputPokedex brd-10 brd-style"
            placeholder="ID, name..."
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
        <select className="selectPokedex brd-10" onChange={typeFilter}>
          {types.map((type) => (
            <option value={type.url} key={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        {pokemons.map((pokemon) => (
          <PokemonCard
            url={pokemon.url ? pokemon.url : pokemon.pokemon?.url}
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
          />
        ))}
      </div>
    </section>
  )
}

export default Pokedex

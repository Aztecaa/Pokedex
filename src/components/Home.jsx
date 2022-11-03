import React, { useState } from 'react'
import { changeTrainer } from '../store/slice/trainerName.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import dragonite from '../img/dragonite.png'
import '../styles/Home.css'

const Home = () => {
  const [trainerName, setTrainerName] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    dispatch(changeTrainer(trainerName))
    navigate('/pokedex')
  }

  return (
    <section className="homeContainer d-flex">
      <div>
        <h1 className='clr-red'>Welcome trainer!</h1>
        <img src={dragonite} alt="dragonite" />
        <form className="formHome d-flex" onSubmit={submit}>
          <input
            className="inputHome brd-10 input-style"
            placeholder="Trainer name... "
            type="text"
            value={trainerName}
            onChange={(e) => setTrainerName(e.target.value)}
          />
          <button className="buttonHome bg-red brd-10">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Home

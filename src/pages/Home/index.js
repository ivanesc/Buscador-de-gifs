import React, {useState} from "react"
import { Link, useLocation } from "wouter"
import ListOfGifs from "../../components/ListOfGifs"
import { useGifs } from "../../hooks/useGifs"

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"]

export default function Home() {

  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const { loading, gifs } = useGifs() //Uso de custom hook

  const handleSubmit = e => {
    e.preventDefault()

    pushLocation(`/search/${keyword}`) //es como hacer un window.location.replace sin recargar la página
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder='Busca un gif aquí...' onChange={handleChange} type='text' value={keyword} />
        <button> Buscar </button>
      </form>
      <h3 className="App-title"> Última búsqueda </h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los gifs más populares</h3>
      <ul>
      {POPULAR_GIFS.map((popularGif) => (
        <li key={popularGif}>
          <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
        </li>
      ))}
      </ul>
    </>
  )
} 
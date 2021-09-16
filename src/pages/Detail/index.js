import React from 'react'
import useGlobalGifs from '../../hooks/useGlobalGifs'
import Gif from '../../components/Gif'

export default function Detail ({ params }) {
  const gifs = useGlobalGifs() //Con esto ahora tenemos disponible como estado global todos los gifs recuperados de la lista

  const gif = gifs.find(singleGIF => singleGIF.id === params.id) //aquí comprobamos si el id del gif que estamos consultando coincide con el de alguno de los GIFs que tenemos en el contexto
  
  console.log(gif)
  //return <h1>GIF con id {params.id}</h1>

  return <Gif {...gif} />
}
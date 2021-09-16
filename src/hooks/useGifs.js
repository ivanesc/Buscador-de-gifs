import {useState, useEffect, useContext} from "react"
import getGifs from "../services/getGifs"
import GifsContext from "../context/GifsContext"

export function useGifs({ keyword } = { keyword: null }) {
  
  const [loading, setLoading] = useState(false)
  const {gifs, setGifs} = useContext(GifsContext) //Con esto conseguimos un estado global accesible desde componentes como el detail

  useEffect(function () {
    setLoading(true)

    //Si no ha buscado nada desde un primer momento los gifs que tienes en la home son random
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random' 
    
    getGifs({ keyword : keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword', keywordToUse)
      })
  }, [keyword, setGifs])

  return {loading, gifs}
}

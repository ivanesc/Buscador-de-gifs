import React, {useEffect, useState} from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'

export default function ListOfGifs({ params }) {
    const { keyword } = params
      
    const [gifs, setGifs] = useState( {loading: false, results: []} )

    useEffect(function() {
        setGifs(actualGifs => ({loading: true, results: actualGifs.results}))
        getGifs({keyword})
            .then(gifs => { 
              setGifs({loading: false, results: gifs})
            })
        //setGifs(DIFFERENT_GIFS)
    }, [keyword])
    
    if (gifs.loading) return <i> Cargando 🔁  </i>

    return <div>
      {
        gifs.results.map(singleGif => 
          <Gif 
              key={singleGif.id}
              title={singleGif.title} 
              url={singleGif.url} 
              id={singleGif.id} 
          />
        )
        /* Alternativa a lo de arriba
            gifs.map(({id, title, url}) => 
              <Gif 
                key={id}
                title={title} 
                url={url} 
                id={id} 
              />
            )
        */
      }
    </div>
}
import React, { useState } from 'react'

const Context = React.createContext({})

export function GifsContextProvider ({children}) {
    const [gifs, setGifs] = useState([])

    //esto se usaría por delante del valor que tiene por defecto el Context arriba del todo que es {} o si tiene acceso. En caso contrario sería el valor que tenga Context por defecto
    return <Context.Provider value={{gifs,setGifs}}> 
        {children}
    </Context.Provider>
}

export default Context

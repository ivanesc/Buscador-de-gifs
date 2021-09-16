import React from 'react'
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Context from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'

import {Link, Route} from "wouter"

//const GIFS = [
//  'https://media4.giphy.com/media/txsJLp7Z8zAic/200w.webp?cid=ecf05e47ecuchpn0h2hkmpiffyv1a9rvpupcr9iswoeq5uku&rid=200w.webp&ct=g',
//  'https://media3.giphy.com/media/EPcvhM28ER9XW/200w.webp?cid=ecf05e47ecuchpn0h2hkmpiffyv1a9rvpupcr9iswoeq5uku&rid=200w.webp&ct=g'
//]

//const DIFFERENT_GIFS = ['https://media3.giphy.com/media/nntN4XMNwTzZ6/200.webp?cid=ecf05e47ecuchpn0h2hkmpiffyv1a9rvpupcr9iswoeq5uku&rid=200.webp&ct=g'] 

export default function App() {

  return (
    <Context.Provider value={ //esto se usaría por delante del valor que tiene por defecto el StaticContext o si tiene acceso. En caso contrario sería el de StaticContext
      {
        name: 'ivan',
        suscribeteAlCanal: true
      }
    }>
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="App-logo" alt='Giffy logo' src='/logo.png' />
        </Link>
        <GifsContextProvider>
          <Route
            component={Home}
            path="/"
          />
          <Route
            component={SearchResults}
            path="/search/:keyword"  
          />  
          <Route
            component={Detail}
            path="/gif/:id"
          />
        </GifsContextProvider>
      </section>
    </div>
    </Context.Provider>
  )
}


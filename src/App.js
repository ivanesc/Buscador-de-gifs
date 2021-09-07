import React from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'

import {Link, Route} from "wouter"

//const GIFS = [
//  'https://media4.giphy.com/media/txsJLp7Z8zAic/200w.webp?cid=ecf05e47ecuchpn0h2hkmpiffyv1a9rvpupcr9iswoeq5uku&rid=200w.webp&ct=g',
//  'https://media3.giphy.com/media/EPcvhM28ER9XW/200w.webp?cid=ecf05e47ecuchpn0h2hkmpiffyv1a9rvpupcr9iswoeq5uku&rid=200w.webp&ct=g'
//]

//const DIFFERENT_GIFS = ['https://media3.giphy.com/media/nntN4XMNwTzZ6/200.webp?cid=ecf05e47ecuchpn0h2hkmpiffyv1a9rvpupcr9iswoeq5uku&rid=200.webp&ct=g'] 

export default function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/colombia'> Gifs de colombia </Link>
        <Link to='/gif/ecuador'> Gifs de ecuador </Link>
        <Link to='/gif/chile'> Gifs de chile </Link>
        <Route 
          path="/gif/:keyword" 
          component={ListOfGifs} />
      </section>
    </div>
  )
}


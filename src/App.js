import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import './App.css';

// Random quote API from Luk https://github.com/lukePeavey/quotable#get-random-quote
// Free API without keys for future projects: https://apipheny.io/free-api/

//import components
import Quotebox from './components/quotebox'

//colors

const colors = ['rgba(172, 78, 164, 0.9)', 'rgba(185, 70, 70, 0.9)', 'rgba(78, 158, 172, 0.9)', 'rgba(68, 163, 111, 0.9)', 'rgba(166, 187, 48, 0.9)']
const backUpColor = 'rgba(120, 123, 150, 0.9)'

function App() {
  const url = 'https://api.quotable.io/random';

  //states
  const [randomQuote, setRandomQuote] = useState('');
  const [bgColor, setBgColor] = useState('')

  //refs
  const prevBgColor = useRef('')
  //handlers
  const handleQuote = () => {
    axios.get(url).then(
      response => {
        setRandomQuote(response.data)
      }
    )
    setBgColor(colors[Math.floor(Math.random() * (5 - 0)) + 0])
    prevBgColor.current = bgColor;
  }

  //useEffect
  useEffect(() => {
    axios.get(url).then(
      response => {
        setRandomQuote(response.data)
      }
    )
  }, [url]
  )


  return (
    <div id="bg-image" className="App" style={{ backgroundColor: prevBgColor.current === bgColor ? backUpColor : bgColor }} >
      <main className="app-main" >
        <h1 className="title">Inspirational quotes</h1>
        <Quotebox tweet={`${randomQuote.content} ${randomQuote.author}`} quote={randomQuote.content} styleBtn={{ color: prevBgColor.current === bgColor ? backUpColor : bgColor, opacity: 1 }} style={{ color: prevBgColor.current === bgColor ? backUpColor : bgColor, opacity: 1 }} author={randomQuote.author} handleQuote={handleQuote} />
      </main>
      <footer className="footer-stl" > <p className="ftr-text">Created by Basan KuBerlinOV</p> <p className="credits">Special thanks to Luke Peavey for API</p></footer>

    </div>
  );
}

export default App;

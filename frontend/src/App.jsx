import { useState, useEffect } from 'react'
import './Card.css'
import {getTracks} from './api/getTracks'
import Card from './Card'

function App() {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    getTracks()
    .then(res => res.json())
    .then(data => setTracks(data))
  }, [])


  return (
    <>
      {
        tracks.map(track => <Card track ={track} key={track.id} />)
      }
    </>
  )
}

export default App

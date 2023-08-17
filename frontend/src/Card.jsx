import React from 'react';
function Card({track}) {
  return (
  <div className="card-container">
    <card className="track-card" id={track.id}>
        <h1>{track.artist}</h1>
        <h2>{track.title}</h2>
        <p>{track.duration}</p>
    </card>
 
    </div>
  )
}

export default Card
import React from 'react'

function TacosFeed({match}) {
  return (
    <div>
      <h1>This is Tacos Feed</h1>
      <h2>{match.params.id}</h2>
      <h2>{match.params.userid}</h2>
    </div>
  )
}

export default TacosFeed

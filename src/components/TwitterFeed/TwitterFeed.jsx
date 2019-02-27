import React from 'react'

function TwitterFeed(props) {
  return (
    <div>
      <h1>This is Twitter Feed</h1>
      <h2>{props.data}</h2>
    </div>
  )
}

export default TwitterFeed

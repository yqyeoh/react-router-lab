import React from 'react'
import {Redirect} from 'react-router-dom'

function TacosFeed({match, history, userIsLoggedIn}) {
  console.log(history)

  const onClickBack = () =>{
      history.push('twitter')
  }

  const onClickForward = () =>{
    history.go(2)
}

if (userIsLoggedIn){
  return (
    <div>
      <h1>This is Tacos Feed</h1>
      <h2>{match.params.id}</h2>
      <h2>{match.params.userid}</h2>
      <button onClick={onClickBack}>Back</button>
      <button onClick={onClickForward}>Forward</button>
    </div>
  )
} else{
  return <Redirect to='/unauthorized'/>
}
 
}

export default TacosFeed

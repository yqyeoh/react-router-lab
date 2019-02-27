import React from 'react'

function TacoDetail(props) {
  return (
    <div>
        detailed page for taco with param {props.match.params.id}
    </div>
  )
}

export default TacoDetail

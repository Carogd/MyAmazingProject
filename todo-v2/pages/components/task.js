
import React from 'react'

const Task = (props) => {
const searchRequestFinalValue = props.searchRequest.searchRequestFinalValue;

  return (
    <>
      {!searchRequestFinalValue ? (
        <div className="complete"><h3>Tâche numéro: {props.searchRequestId}</h3>
          <p>Description tâche: {searchRequestFinalValue}</p></div>) : ''}
    </>
  )
}

export default Task

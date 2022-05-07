
import React from 'react'

const Task = (props) => {

  // const [taskName, setTask] = useState({
  //   idTask: props.searchRequestId,
  //   task: props.searchRequest.searchRequestFinalValue
  // });
const searchRequestFinalValue = props.searchRequest.value;
const searchRequestId = props.searchRequestId;

  return (
    <>
      <div className="complete">
        <h3>Tâche numéro: {searchRequestId}</h3>
        <p>Description tâche: {searchRequestFinalValue}</p>
      </div>
    </>
  )
}

export default Task

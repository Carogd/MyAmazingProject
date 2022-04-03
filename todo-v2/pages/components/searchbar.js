import React from 'react'


const Searchbar = (props) => {

  return (

    <div className='searchBar' >
        <label htmlFor="site-search" >Ajouter une tache ici:</label>
        <input type="search" id="site-search" name="text" onChange={props.handleSearch}></input>
        <button onClick={props.AddTask}>Add task</button>
    </div>
  )
}

export default Searchbar
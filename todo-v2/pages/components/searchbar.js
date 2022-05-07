import React from 'react'

const Searchbar = (props) => {

  return (

    <form className='searchBar' onSubmit={props.AddTask} >
        <label htmlFor="site-search" >Ajouter une tache ici:</label>
        <input type="search" id="site-search" name="text" onChange={props.handleSearch} value={props.searchRequest.value}></input>
        <button >Add task</button>
    </form>
  )
}

export default Searchbar
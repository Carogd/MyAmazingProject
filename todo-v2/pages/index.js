import Head from 'next/head'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Searchbar from './components/searchbar'
import Task from './components/task'

export default function Home() {
  // const [todos, setTodos] = useState([])
  // useEffect(() => {
  //   const data = fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
  //   .then(r => r.json())
  //   .then(data => {
  //     setTodos(data)
  //   })
  // }, [])

  const [searchRequest, setSearchRequest] = useState({
    value: '',
    searchRequestFinalValue : ''
  });

  const [searchRequestId, setSearchRequestId] = useState(1);

  const handleSearch  = (e) => {
    setSearchRequest({
      value: e.target.value,
    })
  };

  const AddTask = e => {
    e.preventDefault();
    const searchRequestFinalValue = searchRequest.value;
    setSearchRequest({
      value: '',
      searchRequestFinalValue: searchRequestFinalValue,
    })
    
  if (searchRequestFinalValue) {
      setSearchRequestId(searchRequestId + 1)
    }
}

  return (
    <>
      <Head>
        <title>Ma super todo</title>
        <meta name="description" content="Ma super todo - Caro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='wrapper-todolist'>
        <Searchbar handleSearch={handleSearch} searchRequest={searchRequest} AddTask={AddTask} />
        <Task searchRequest={searchRequest} searchRequestId={searchRequestId} />
      </div>
      {/* <ul>
        {todos.map((item) => <li key={item.id}><p>{item.title}</p></li>)}
      </ul> */}
    </> 
  )
}

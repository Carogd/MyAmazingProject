import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const data = fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
    .then(r => r.json())
    .then(data => {
      setTodos(data)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Ma super todo</title>
        <meta name="description" content="la super todo de Caroline" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {/* {todos.map( todos => <li><p> {todos.title} </p></li>)} */}
      </ul>
     </>
     
  )
}


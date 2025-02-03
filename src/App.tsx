import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.org/',
})

function App() {
  const [count, setCount] = useState(0)

  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await api.get('/posts')
      return data
    },
  })

  const Button = styled.button`
      background-color: darkred;
      color: white;
  `

  return (
    <>
      <h1 className="text-4xl font-bold underline"> Hello world! </h1>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <span>
            {posts?.[count].content}
          </span>
        <img src={posts?.[count].image} alt="" />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

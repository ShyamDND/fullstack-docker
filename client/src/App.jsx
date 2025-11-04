import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import { useTransition } from 'react'

export default function App() {
  const [message, setMessage] = useState('')
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    console.log('Helo')
    fetch('http://localhost:4000/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
  }, [])

  return (
    <>
      <h1>Welcome to VELTO by Shyam</h1>
      <p>Hello nunu boy</p>
      <h2>DATA: {message}</h2>
    </>
  )
}

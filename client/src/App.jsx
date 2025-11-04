import React from 'react'
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import { useTransition } from 'react'

export default function App() {
  const [message, setMessage] = useState('')
  const [isPending, startTransition] = useTransition()

  async function fetchData() {
    try {
      const response = await fetch('/api/message')
      if (!response.ok) {
        console.error('Network response was not ok')
      }
      const data = await response.json()
      setMessage(data.message)
    } catch (error) {
      console.error('Network response was not ok')
    }
  }

  useEffect(() => {
    startTransition(() => {
      fetchData()
    })
  }, [])

  return (
    <>
      <h1>Welcome to VELTO by Shyam</h1>
      <h2>DATA: {message}</h2>
    </>
  )
}

import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:3000',
      //Production URL here
    ],
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello From @ShyamDND' })
})

const PORT = 4000

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

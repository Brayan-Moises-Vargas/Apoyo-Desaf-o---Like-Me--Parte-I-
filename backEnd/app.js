import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import postsRoutes from './routes/postRouter.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(postsRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT} 🚀 `)
})
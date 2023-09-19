import express from 'express'
import cors from 'cors'
import {config} from "dotenv"
import UsuariosController from './src/controllers/UsuariosController.js'
import TarefasController from './src/controllers/TarefasController.js'
import { config } from 'dotenv'

config()

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Esta rodando`)
})

app.use(express.json())
app.use(cors('*'))
UsuariosController.rotas(app)
TarefasController.rotas(app)
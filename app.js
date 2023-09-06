import express from 'express'
import UsuariosController from './src/controllers/UsuariosController.js'
import TarefasController from './src/controllers/TarefasController.js'


const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Esta rodando`)
})

app.use(express.json())
UsuariosController.rotas(app)
TarefasController.rotas(app)
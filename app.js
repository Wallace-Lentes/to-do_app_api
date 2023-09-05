import express from 'express'
import UsuariosController from './src/controllers/Usuarios.js'
import TarefasController from './src/controllers/Tarefas.js'


const app = express()
const port = process.env.PORT | 3000

app.listen(port, () => {
  console.log(`Esta rodando`)
})


UsuariosController.rotas(app)
TarefasController.rotas(app)
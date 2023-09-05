import UsuariosMetodos from "../utils/UsusariosMetodos.js";
import UsuariosModel from "../models/UsuariosModel.js";

class UsuariosController {
  /**
   * Método para contralização de rotas no controller
   * @param {Express} app 
   */
  static rotas(app) {
    /**
     * Rota para buscar todos os usuários
     */
    app.get("/usuarios", (req, res) => {
      const usuarios = UsuariosMetodos.buscarTododsOsUsuarios()
      res.status(200).json(usuarios)
    })

    app.get("/usuarios/:nome", (req, res) => {
      const id = req.params.nome
      const resposta = UsuariosMetodos.buscarUsuarioPorId(id)
      res.status(200).json(resposta)
    })

    /**
     * Rota apra inserir um novo usuário
     */
    app.post("/usuarios", (req, res) => {
      const body = Object.values(req.body)
      const usuario = new UsuariosModel(...body)
      UsuariosMetodos.inserirUsuarios(usuario)
      res.status(200).json({
        error: false,
        message: "Usuario criado com sucesso!"
      })
    })
  }
}

export default UsuariosController
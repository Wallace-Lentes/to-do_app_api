
class TarefasController {
  /**
   * 
   * @param {Express} app 
   */
  static rotas(app) {
    app.get("/tarefas", (req, res) => {
      res.status(200).json({
        "tarefas": {
          "tarefas1": {
            "id_tarefa": "1",
            "titulo": "comprar pão",
            "descricao": "comprar 5 pães",
            "data_inicio": "28/08/2023",
            "data_conclusao": "28/08/2023",
            "status": "feito",
            "id_usuario": "1"
          }
        }
      })
    })
    app.post("/tarefas", (req, res) => {
      res.status(200).json({
        "tarefas": {
          "tarefas1": {
            "id_tarefa": "1",
            "titulo": "comprar mais pão",
            "descricao": "comprar 10 pães",
            "data_inicio": "28/08/2023",
            "data_conclusao": "28/08/2023",
            "status": "feito",
            "id_usuario": "1"
          }
        }
      })
    })
    app.post("/tarefas", (req, res) =>{
      const body = req.body
      console.log("body")
      res.status(200).json(body)
    })
  }
}

export default TarefasController  
import DatabaseMetodos from "../database/DatabaseMetodos.js";
import UsuariosModel from "../models/UsuariosModel.js";

const USUARIOS_TABELA = "Usuarios"

class UsuariosMetodos extends DatabaseMetodos{
    inserirUsuario(data){
        this.inserir(USUARIOS_TABELA, data)
    }
    static buscarTododsOsUsuarios(){
        return this.buscar(USUARIOS_TABELA)
    }
    static buscarUsuarioPorId(id){
        return this.buscarPorId(USUARIOS_TABELA, id)
    }
}

export default UsuariosMetodos;
import DatabaseMetodos from "./DatabaseMetodos.js";
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
    static deletarUsuarioPorId(id){
        return this.deletarPorId(USUARIOS_TABELA, id)
    }
    static AtualizarUsuarioPorId(id, data){
        this.atualizarPorId(USUARIOS_TABELA, id, data)
    }
}

export default UsuariosMetodos;
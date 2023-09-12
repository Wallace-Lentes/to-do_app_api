import UsuariosModel from "../models/UsuariosModel.js";
import DAO from "./DAO.js";

const USUARIOS_TABELA = "USUARIOS"

class UsuariosDAO extends DAO{
    static async inserirUsuario(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO USUARIOS (NOME, EMAIL, TELEFONE) VALUES (?, ?, ?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }
    static async buscarTododsOsUsuarios(){
        return await this.buscar(USUARIOS_TABELA)
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

export default UsuariosDAO;
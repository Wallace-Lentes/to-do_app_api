import Database from "../database/Database.js";

class DatabaseMetodos{
    static inserir(entidade, data){
        Database[entidade].push(data)
    }
    static buscar(entidade){
        return Database[entidade]
    }
    static buscarPorId(entidade, id){
        return Database[entidade][id]
    }
    static deletarPorId(entidade, id){
        delete Database[entidade][id]
    }
    static atualizarPorId(entidade, id, data){
        Database[entidade][id] = data
    }
}

export default DatabaseMetodos;
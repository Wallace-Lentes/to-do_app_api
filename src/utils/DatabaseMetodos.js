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
}

export default DatabaseMetodos;
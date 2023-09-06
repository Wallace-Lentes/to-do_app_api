import UsuariosMetodos from "../utils/UsuariosMetodos.js";

class ValidacaoServices{
    static validarExistencia(id){
        const usuario = UsuariosMetodos.buscarUsuarioPorId(id)
        if(usuario){
            return true
        }else{
            return false
        }
    }
    static validaNome(nome){
        return typeof nome == "string" && nome.length > 2
    }
    static validaEmail(email){
        return typeof email == "string" && email.length > 2
    }
    static validaTelefone(telefone){
        const telefoneInt = parseInt(telefone)
        return typeof telefone == "string" && telefone.length > 9 && telefone == telefoneInt
    }
    static validaCamposUsuario(nome, email, telefone){
        const isValid = this.validaNome(nome) && this.validaEmail(email) && this.validaTelefone(telefone)
        return isValid
    }
}
export default ValidacaoServices
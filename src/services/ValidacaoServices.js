import UsuariosMetodos from "../utils/UsusariosMetodos";

class ValidacaoServices{
    static validarExistencia(id){
        const usuario = UsuariosMetodos.buscarUsuarioPorId(id)
        if(usuario){
            return true
        }else{
            return false
        }
    }
}
export default ValidacaoServices
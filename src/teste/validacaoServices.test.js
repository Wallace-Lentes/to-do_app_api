import ValidacaoServices from "../services/ValidacaoServices.js";

describe ("Usuarios", () => {
    test("valida nome", () => {
        expect(ValidacaoServices.validaNome("")).toBe(false)
        expect(ValidacaoServices.validaNome("1")).toBe(false)
        expect(ValidacaoServices.validaNome("12")).toBe(false)
        expect(ValidacaoServices.validaNome("123")).toBe(true)
    })
})

describe ("Telefone", () => {
    test("valida telefone", () => {
        expect(ValidacaoServices.validaTelefone("")).toBe(false)
        expect(ValidacaoServices.validaTelefone("1")).toBe(false)
        expect(ValidacaoServices.validaTelefone("12")).toBe(false)
        expect(ValidacaoServices.validaTelefone("123")).toBe(true)
    })
})
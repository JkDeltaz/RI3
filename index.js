class Cliente {
    #cpf

    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    getCPF() {
        return this.#cpf
    }

    getCPFUpper() {
        return this.#cpf.toUpperCase()
    }

    getCPFLower() {
        return this.#cpf.toLowerCase()
    }

    getNomeUpper() {
        return this.nome.toUpperCase()
    }

    getNomeLower() {
        return this.nome.toLowerCase()
    }

    addTelefone(telefone) {
        this.telefones.add(telefone)
    }

}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }

    getDDDUpper() {
        return this.ddd.toUpperCase()
    }

    getDDDLower() {
        return this.ddd.toLowerCase()
    }

    getNumeroUpper() {
        return this.numero.toUpperCase()
    }

    getNumeroLower() {
        return this.numero.toLowerCase()
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    getEstadoUpper() {
        return this.estado.toUpperCase()
    }

    getEstadoLower() {
        return this.estado.toLowerCase()
    }

    getCidadeUpper() {
        return this.cidade.toUpperCase()
    }

    getCidadeLower() {
        return this.cidade.toLowerCase()
    }

    getRuaUpper() {
        return this.rua.toUpperCase()
    }

    getRuaLower() {
        return this.rua.toLowerCase()
    }

    getNumeroUpper() {
        return this.numero.toUpperCase()
    }

    getNumeroLower() {
        return this.numero.toLowerCase()
    }
}

class Empresa {
    #cnpj

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    addTelefone(telefone) {
        this.telefones.add(telefone)
    }

    addCliente(cliente) {
        this.clientes.add(cliente)
    }

    getCNPJ() {
        return this.#cnpj
    }

    getCNPJUpper() {
        return this.#cnpj.toUpperCase()
    }

    getCNPJLower() {
        return this.#cnpj.toLowerCase()
    }

    getRazaoSocialUpper() {
        return this.razaoSocial.toUpperCase()
    }

    getRazaoSocialLower() {
        return this.razaoSocial.toLowerCase()
    }

    getNomeFantasiaUpper() {
        return this.nomeFantasia.toUpperCase()
    }

    getNomeFantasiaLower() {
        return this.nomeFantasia.toLowerCase()
    }

    detalhe() {
        let retorno = `Razão Social: ${this.razaoSocial}\nNome Fantasia: ${this.nomeFantasia}\n----------------\n`  
        
        for (let cliente of this.clientes) {
            retorno += `\nNome: ${cliente.nome}\nEstado: ${cliente.endereco.estado} cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}`
            for (let telefone of cliente.telefones) {
                retorno += `ddd: ${telefone.ddd} numero: ${telefone.numero}\n`
            }
            retorno += `
            `



        }

        return retorno

    }

}


let telefoneEmpresa1 = new Telefone("12", "123456789")
let telefoneEmpresa2 = new Telefone("13", "987654321")

let enderecoEmpresa = new Endereco("RS", "Carpazinha", "RS 230", "0413")

let empresa = new Empresa("Ltda", "Imobiliária Fachada", "123098123", enderecoEmpresa)
empresa.addTelefone(telefoneEmpresa1)
empresa.addTelefone(telefoneEmpresa2)

let telefone1Cli1 = new Telefone("12", "091725590")
let telefone2Cli1 = new Telefone("12", "091165590")
let enderecoCli1 = new Endereco("SP", "São Paulo", "Av. Paulista", "142")

let telefone1Cli2 = new Telefone("11", "935820582")
let telefone2Cli2 = new Telefone("10", "295820935")
let enderecoCli2 = new Endereco("SP", "São José dos Campos", "Jessen Vidal", "111")

let telefone1Cli3 = new Telefone("99", "193751093")
let telefone2Cli3 = new Telefone("88", "081358001")
let enderecoCli3 = new Endereco("MG", "Varminho", "Abobrinha", "01")

let telefone1Cli4 = new Telefone("60", "000123123")
let telefone2Cli4 = new Telefone("52", "102709158")
let enderecoCli4 = new Endereco("SP", "São José dos Campos", "Afonso Pena", "09")

let telefone1Cli5 = new Telefone("11", "123098123")
let telefone2Cli5 = new Telefone("80", "109251757")
let enderecoCli5 = new Endereco("MG", "Carpazinha", "Santo Berço", "0413")

let cliente1 = new Cliente("Alexandre", "912490852", enderecoCli1)
cliente1.addTelefone(telefone1Cli1)
cliente1.addTelefone(telefone2Cli1)

let cliente2 = new Cliente("Guilherme", "091725907", enderecoCli2)
cliente2.addTelefone(telefone1Cli2)
cliente2.addTelefone(telefone2Cli2)

let cliente3 = new Cliente("Lírio", "9019249124", enderecoCli3)
cliente3.addTelefone(telefone1Cli3)
cliente3.addTelefone(telefone2Cli3)

let cliente4 = new Cliente("Dara", "7812498525", enderecoCli4)
cliente4.addTelefone(telefone1Cli4)
cliente4.addTelefone(telefone2Cli4)

let cliente5 = new Cliente("Chico", "09091238511", enderecoCli5)
cliente5.addTelefone(telefone1Cli5)
cliente5.addTelefone(telefone2Cli5)

empresa.addCliente(cliente1)
empresa.addCliente(cliente2)
empresa.addCliente(cliente3)
empresa.addCliente(cliente4)
empresa.addCliente(cliente5)

console.log(empresa.detalhe())
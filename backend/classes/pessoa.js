module.exports = app => {
    class Pessoa {
        
        constructor(cpf, nome, senha, adm) {
            this.cpf = cpf
            this.nome = nome
            this.senha = senha
            this.adm = adm
        }
        
        async salvarDados() {
            await app.db('pessoa').insert(this.getDadosPessoa())
        }

        getDadosPessoa() {
            const usuario = {
                cpf: this.cpf,
                nome: this.nome,
                senha: this.senha,
                adm: this.adm
            }

            return usuario
        }
    }

    return { Pessoa }
}



module.exports = app => {
    class Pessoa {
        
        constructor(cpf, nome, senha) {
            this.cpf = cpf
            this.nome = nome
            this.senha = senha
        }
        
        async salvarDados() {
            await app.db('pessoa').insert(this.getDadosPessoa())
        }

        getDadosPessoa() {
            const usuario = {
                cpf: this.cpf,
                nome: this.nome,
                senha: this.senha
            }

            return usuario
        }
    }

    return { Pessoa }
}



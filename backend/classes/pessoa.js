module.exports = app => {
    const { existsOrError } = app.api.validacao

    class Pessoa {
        idPessoa = 0

        constructor(cpf, nome, senha, adm) {
            this.cpf = cpf
            this.nome = nome
            this.senha = senha
            this.adm = adm
        }
        
        async salvarDados() {
            await app.db('pessoa').insert(this.getDadosPessoa())
        }

        async remover() {
            existsOrError(this.idPessoa, "Código do usuário não informado!")

            const rowsDeleted = await app.db('pessoa')
                .where({ id_pessoa: this.idPessoa}).del()

            existsOrError(rowsDeleted, 'Usuário não encontrado!')

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

        setIdPessoa(id) {
            this.idPessoa = id
        }

    }

    return { Pessoa }
}



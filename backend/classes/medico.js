module.exports = app => {
    const { Pessoa } = app.classes.pessoa
    const { existsOrError } = app.api.validacao

    class Medico extends Pessoa {
        idPessoa = 0

        constructor(cpf, nome, senha, crm){
            super(cpf, nome, senha)
            this.crm = crm
        }

        async salvarDados() {
            await super.salvarDados()
            await app.db('medico').insert(await this.getDadosMedico())
        }

        async remover() {
            const rowsDeleted = await app.db('medico')
                .where({ id_pessoa: this.idPessoa}).del()

            existsOrError(rowsDeleted, 'Médico não encontrado!')

            await super.remover()

        }

        async getDadosMedico() {
            const usuario = {
                crm: this.crm,
                id_pessoa: await this.get_id_pessoa()
            }

            return usuario
        }

        async get_id_pessoa() {
            const pessoaFromDB = await app.db('pessoa')
                .select('id_pessoa')
                .where({cpf: this.cpf})
                .first()
                
            return pessoaFromDB.id_pessoa
        }

        setIdPessoa(id) {
            this.idPessoa = id
        }
    }


    return { Medico }
}


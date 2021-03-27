module.exports = app => {
    const {Medico} = app.classes.medico
    const { existsOrError } = app.api.validacao

    class Professor extends Medico{

        constructor(cpf, nome, senha, crm, titulacao){
            super(cpf, nome, senha, crm) 
            this.titulacao = titulacao
        }

        async get_crm(){
            const medicoFromDB = await app.db('medico')
                .select('crm')
                .where({crm: this.crm})
                .first()
            
            return medicoFromDB.crm
        }
        async remover(idPessoa) {
            const rowsDeleted = await app.db('professor')
                .where({ crm: await super.getCRM(idPessoa)}).del()

            existsOrError(rowsDeleted, 'Professor não encontrado!')

            await super.remover(idPessoa)
        }

        async getDadosProfessor(){
            const medico = {
                titulacao: this.titulacao,
                crm: await this.get_crm()
            }

            return medico
        }

        async salvarDados(){
            await super.salvarDados()
            await app.db('professor').insert(await this.getDadosProfessor())
        }
    }

    return {Professor}
}
module.exports = app => {

    const {Medico} = app.classes.medico
    const { existsOrError } = app.api.validacao

    class Residente extends Medico{

        constructor(cpf, nome, senha, crm, ano_residencia){
            super(cpf, nome, senha, crm)
            this.ano_residencia = ano_residencia
        }

        async salvarDados(){
            await super.salvarDados()
            await app.db('residente').insert(await this.getDadosResidente())
        }

        async remover(idPessoa) {
            const rowsDeleted = await app.db('residente')
                .where({ crm: await super.getCRM(idPessoa)}).del()

            existsOrError(rowsDeleted, 'Residente não encontrado!')

            await super.remover(idPessoa)
        }

        async getDadosResidente(){
            const medico = {
                ano_residencia: this.ano_residencia,
                crm: this.crm
            }

            return medico
        }
        
    }

    return {Residente}
}
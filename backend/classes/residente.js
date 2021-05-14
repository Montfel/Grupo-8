module.exports = app => {

    const {Medico} = app.classes.medico
    const { existsOrError } = app.api.validacao

    class Residente extends Medico{

        constructor(cpf, nome, senha, crm, ano_residencia_inicio){
            super(cpf, nome, senha, crm)
            this.ano_residencia_inicio = ano_residencia_inicio
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
                ano_residencia_inicio: this.ano_residencia_inicio,
                crm: this.crm
            }

            return medico
        }
        
    }

    return {Residente}
}
module.exports = app => {

    const {Medico} = app.classes.Medico

    class Residente extends Medico{

        constructor(cpf, nome, senha, crm, ano_residencia){
            super(cpf, nome, senha, crm)
            this.ano_residencia = ano_residencia
        }

        async salvarDados(){
            super.salvarDados()
            await app.db('residente').insert(await this.getDadosResidente())
        }

        async getDadosResidente(){
            const medico = {
                ano_residencia: this.ano_residencia,
                crm: await this.get_CRM()
            }

            return medico
        }

        async get_CRM(){
            const medicoFromDB = await app.db('medico')
                .select('crm')
                .where({cpf: this.cpf})
                .first()

            return medicoFromDB.crm
        }
    }

    return {Residente}
}
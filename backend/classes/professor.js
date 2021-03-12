module.exports = app => {
    const {Medico} = app.classes.medico

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
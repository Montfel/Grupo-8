module.exports = app => {
    const { Pessoa } = app.classes.pessoa

    class Medico extends Pessoa {

        constructor(cpf, nome, senha, crm){
            super(cpf, nome, senha)
            this.crm = crm
        }

        async salvarDados() {
            await super.salvarDados()
            await app.db('medico').insert(await this.getDadosMedico())
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

    }

    return { Medico }
}


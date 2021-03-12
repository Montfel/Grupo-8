module.exports = app => {
    
    const {Pessoa} = app.classes.pessoa 

    class Paciente extends Pessoa{
        constructor(cpf, nome, senha, cor, sexo, data_nascimento){
            super(cpf, nome, senha)
            this.cor = cor 
            this.sexo = sexo 
            this.data_nascimento = data_nascimento
        }

        async get_id_pessoa(){
            const pessoaFromDB = await app.db('pessoa')
                .select('id_pessoa')
                .where({cpf: this.cpf})
                .first()

            return pessoaFromDB.id_pessoa
        }

        async getDadosPaciente(){
            const pessoa = {
                cor: this.cor,
                sexo: this.sexo,
                data_nascimento: this.data_nascimento,
                id_pessoa: await this.get_id_pessoa()
            }

            return pessoa
        }

        async salvarDados(){
            await super.salvarDados()
            await app.db('paciente').insert(await this.getDadosPaciente())
        }
    }

    return {Paciente}
}
module.exports = app => {
    class Exame {

        constructor(cpf, hipotese, data, tipoMedico, tipoExame, recomendacoes){
            this.cpf = cpf
            this.hipotese = hipotese
            this.data = data
            this.tipoMedico = tipoMedico
            this.tipoExame = tipoExame
            this.recomendacoes = recomendacoes
        }

        async salvarExame(res) {
            if (await this.exameNaoExiste()) {
                await app.db('exame').insert(await this.getDadosExames())
                res.status(204).send()
                
            } else {
                res.status(400).send('Paciente já possui um exame do mesmo tipo em andamento.')
            }
        }

        async exameNaoExiste() {
            const exames = await app.db('exame')
                .where({id_paciente: await this.getIdPaciente()})


            if (!exames.length) {
                return true;
                
            } else {
                const existe = exames.some((obj) => {
                    if (obj.id_tipo_exame === this.tipoExame &&  
                        obj.id_tipo_status == 1 || obj.id_tipo_status == 2) {
                        
                        return true
                    }
                });

                if (existe) {
                   return false

                } else {
                    return true
                }
            }

        }

        async getDadosExames() {
            const exame = {
                id_paciente: await this.getIdPaciente(),
                hipotese: this.hipotese,
                data_exame: this.data,
                id_tipo_exame: this.tipoExame,
                recomendacoes: this.recomendacoes,
                id_tipo_status: 1
            }

            return exame
        }

        async getIdPaciente() {
            const pacienteFromDB = await app.db('paciente')
                .select('id_paciente')
                .where({id_pessoa: await this.getIdPessoa()})
                .first()

            return pacienteFromDB.id_paciente
        }

        async getIdPessoa() {
            const pessoaFromDB = await app.db('pessoa')
                .select('id_pessoa')
                .where({cpf: this.cpf})
                .first()

            return pessoaFromDB.id_pessoa
        }



    }

    return { Exame }
}
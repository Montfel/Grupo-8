module.exports = app => {
    class Laudo {
        constructor(crm, cpf, data, laudo, pdf) {
            this.crm = crm;
            this.cpf = cpf;
            this.data = data;
            this.laudo = laudo;
            this.pdf = pdf;
        }

        async salvarLaudo(res) {
            if (await this.exameExiste()) {
                await app.db('exame').update(await this.getDadosLaudo())
                res.status(201).send()

            } else {
                res.status(400).send('Paciente não possui exames pendentes!')
            }
        }

        async exameExiste() {
            const exames = await app.db('exame')
                .where({id: await this.getIdExame()})
                .first()

            if (!exames) {
                return false;
            }

            return true;
        }

        async getDadosLaudo() {
            const laudo = {
                id: await this.getIdExame(),
                crm: this.crm,
                data_realizada: this.data,
                laudo: this.laudo,
                imagem: this.pdf,
                id_tipo_status: 2
            }

            return laudo
        }

        async getIdExame() {
            const exameFromDB = await app.db('exame')
                .select('id')
                .where({id_paciente: await this.getIdPaciente(), id_tipo_status: 1})
                .first()

            return exameFromDB.id;
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

    return { Laudo }
}
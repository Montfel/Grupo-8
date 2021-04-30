module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validacao
    const { Exame } = app.classes.exame

    const salvarExame = async(req, res) => {
        const exame = { ...req.body }

        try {
            existsOrError(exame.cpf, 'CPF do paciente não informado!')
            existsOrError(exame.hipotese, 'Hipótese do exame não informado!')
            existsOrError(exame.data, 'Data do exame não informado!')
            existsOrError(exame.tipoExame, 'Tipo do exame não informado!')

            // // Temporário
            // existsOrError(exame.crm, 'CRM do médico não informado!')
            // existsOrError(exame.tipoMedico, 'Tipo do médico não informado!')
            
        } catch (msg) {
            return res.status(400).send(msg)
        }

        const exame_ = new Exame(exame.cpf, exame.hipotese, exame.data, exame.tipoMedico, exame.tipoExame, exame.recomendacoes)

        exame_.salvarExame(res)

    }

    return { salvarExame }
}
module.exports = app => {
    const { existsOrError } = app.api.validacao

    const { Residente } = app.classes.residente

    const salvarResidente = (req, res) => {
        const residente = { ...req.body }

        try {
            existsOrError(residente.ano_residencia, "Ano de residência não informado!") 

        } catch (msg) {
            return res.status(400).send(msg)
        }

        const residente_ = new Residente(residente.cpf, residente.nome, residente.senha, residente.crm, residente.ano_residencia)

        residente_.salvarDados()

        res.status(204).send()
    }

    return { salvarResidente }

}
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

    const removerResidente = async (req, res) => {
        try {
            const residente_ = new Residente()
            residente_.remover(req.params.id_pessoa)

            res.status(204).send()

        } catch (msg) {
            res.status(400).send('Não foi possível remover residente!')
        }
    }

    return { salvarResidente, removerResidente }

}
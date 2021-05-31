module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validacao
    const { Laudo } = app.classes.laudo

    const salvarLaudo = async(req, res) => {
        const laudo = { ...req.body }

        laudo.imagem = req.file.originalname;

        try {
            existsOrError(laudo.crm, "CRM do médico não informado!")
            existsOrError(laudo.cpf, "CPF do paciente não informado!")
            existsOrError(laudo.data_realizada, "Data realizada do exame não informada!")
            existsOrError(laudo.laudo, "Laudo não informado!")
            existsOrError(laudo.imagem, "Imagem não inserida!")

        } catch (msg) {
            return res.status(400).send(msg)
        }

        const laudo_ = new Laudo(laudo.crm, laudo.cpf, laudo.data_realizada, laudo.laudo, laudo.imagem)
        
        laudo_.salvarLaudo(res);
    }

    return { salvarLaudo }
}
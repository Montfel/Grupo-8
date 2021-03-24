module.exports = app => {
    const { existsOrError } = app.api.validacao

    const { Professor } = app.classes.professor

    const salvarProfessor = (req, res) => {
        const professor = { ...req.body }

        try {
            existsOrError(professor.titulacao, "Titulação não informada!") 

        } catch (msg) {
            return res.status(400).send(msg)
        }

        const professor_ = new Professor(professor.cpf, professor.nome, professor.senha, professor.crm, professor.titulacao)

        professor_.salvarDados()

        res.status(204).send()
        
    }

    return { salvarProfessor }

}
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
    const removerProfessor = async (req, res) => {
        try {
            const professor_ = new Professor()
            professor_.remover(req.params.id_pessoa)

            res.status(204).send()

        } catch (msg) {
            res.status(400).send('Não foi possível remover Professor!')
        }
    }

    const listarProfessor = (req, res) => {
        app.db('professor')
            .then(professor => res.json(professor))
            .catch(err => res.status(500).send(err))
    }

    const listarProfessorPeloId = (req, res) => {
        app.db('professor')
                .where({ crm: req.params.id })
                .then(professor => res.json(professor))
                .catch(err => res.status(500).send(err))
    }

    return { salvarProfessor, removerProfessor, listarProfessor, listarProfessorPeloId }

}
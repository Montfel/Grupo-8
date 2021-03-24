module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validacao

    const { Medico } = app.classes.medico
    const { salvarResidente } = app.api.residente
    const { salvarProfessor } = app.api.professor

    const salvarMedico = async(req, res) => {

        const medico = { ...req.body }

        try {
            existsOrError(medico.crm, "CRM não informado!")
                
            if (isResidente(medico.tipo_medico)) {
                existsOrError(medico.ano_residencia, "Ano de residência não informado!")  

            } else if (isProfessor(medico.tipo_medico)) {
                existsOrError(medico.titulacao, "Titulação não informada!")  
            }

            const medicosFromDB = await app.db('medico')
                .where({crm: medico.crm})
                .first()

            notExistsOrError(medicosFromDB, "Médico já cadastrado!")

        } catch (msg) {
            return res.status(400).send(msg)
        }

        if (isResidente(medico.tipo_medico)) {
            salvarResidente(req, res)

        } else if (isProfessor(medico.tipo_medico)) {
            salvarProfessor(req, res)

        } else if (isProfissional(medico.tipo_medico)){

            const medico_ = new Medico(medico.cpf, medico.nome, medico.senha, medico.crm)

            medico_.salvarDados()

            res.status(204).send()

        } else {
            res.status(400).send('Não foi possível identificar o tipo do médico!')
        }

    }




    // -------- Funções ----------------

    function isResidente(tipo) {
        if (tipo === 'residente') {
            return true
        }
        return false
    }

    function isProfessor(tipo) {
        if (tipo === 'professor') {
            return true
        }
        return false
    }

    function isProfissional(tipo) {
        if (tipo === 'profissional') {
            return true
        }
        return false
    }

    return { salvarMedico }
}
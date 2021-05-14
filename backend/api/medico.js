module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validacao

    const { Medico } = app.classes.medico
    const { 
        salvarResidente, 
        removerResidente, 
        listarResidente,
        listarResidentePeloId 
    } = app.api.residente

    const { 
        salvarProfessor, 
        removerProfessor, 
        listarProfessor, 
        listarProfessorPeloId 

    } = app.api.professor

    const salvarMedico = async(req, res) => {
        const medico = { ...req.body }
        
        try {
            existsOrError(medico.crm, "CRM não informado!")
            
            // if (isResidente(medico.tipo_medico)) {
            //     existsOrError(medico.ano_residencia, "Ano de residência não informado!")  
                
            // } else if (isProfessor(medico.tipo_medico)) {
            //     existsOrError(medico.titulacao, "Titulação não informada!")  
            // }
            
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

    const removerMedico = async(req, res) => {
        try {
            const medico_ = new Medico()

            const crm = await medico_.getCRM(req.params.id_pessoa)

            if (await medico_.isResidente(crm)) {
                removerResidente(req, res)
    
            } else if (await medico_.isProfessor(crm)) {
                removerProfessor(req, res)

            } else if (isProfissional(req.param.tipo)){
                medico_.remover(req.params.id_pessoa)
    
                res.status(204).send()
            }

        } catch (msg) {
            res.status(400).send('Não foi possível remover medico!')

        }
    }

    const listarMedicos = (req, res) => {
        if (isResidente(req.params.tipo)) {
            listarResidente(req, res)

        } else if (isProfessor(req.params.tipo)) {
            listarProfessor(req, res)

        } else if (isProfissional(req.params.tipo)) {
            app.db('medico')
                .then(medicos => res.json(medicos))
                .catch(err => res.status(500).send(err))
        }

    }

    const listarMedicosPeloId = (req, res) => {
        if (isResidente(req.params.tipo)) {
            listarResidentePeloId(req, res)

        } else if (isProfessor(req.params.tipo)) {
            listarProfessorPeloId(req, res)

        } else if (isProfissional(req.params.tipo)) {
            app.db('medico')
                .where({ id_pessoa: req.params.id })
                .then(medicos => res.json(medicos))
                .catch(err => res.status(500).send(err))
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


    return { salvarMedico, removerMedico, listarMedicos, listarMedicosPeloId }
}
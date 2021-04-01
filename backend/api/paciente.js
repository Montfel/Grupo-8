module.exports = app => {
    const { existsOrError } = app.api.validacao

    const { Paciente } = app.classes.paciente

    const salvarPaciente = (req, res) => {
        const paciente = { ...req.body }

        try {
            existsOrError(paciente.cor, "Cor não informada!")
            existsOrError(paciente.sexo, "Sexo não informado!")
            existsOrError(paciente.data_nascimento, "Data de nascimento não informada!")

        } catch (msg) {
            return res.status(400).send(msg)
        }

        const paciente_ = new Paciente(paciente.cpf, paciente.nome, paciente.senha, paciente.cor, paciente.sexo, paciente.data_nascimento)

        paciente_.salvarDados()

        res.status(204).send()
    }

    const removerPaciente = async(req, res) => {
        try{
            const paciente_ = new Paciente()
            paciente_.remover(req.parms.id_pessoa)

            res.status(204).send()
        }catch(msg){
            res.status(400).send("Não foi possível remover paciente!")
        }
    }

    const listarPaciente = (req, res) => {
        app.db('paciente')
            .then(paciente => res.json(paciente))
            .catch(err => res.status(500).send(err))
    }

    return { salvarPaciente, removerPaciente, listarPaciente }
}
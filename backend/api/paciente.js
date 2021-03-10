const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validacao

    const encriptarSenha = senha => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(senha, salt)
    }

    const salvar = async (req, res) => {

        const paciente = { ...req.body }

        try {
            existsOrError(paciente.cpf, 'CPF não informado!')
            existsOrError(paciente.nome, 'Nome não informado!')
            existsOrError(paciente.cor, 'Cor não informada!')
            existsOrError(paciente.sexo, 'Sexo não informada!')
            existsOrError(paciente.data_nascimento, 'Data de nascimento não informada!')
            existsOrError(paciente.senha, 'Senha não informada!')
            existsOrError(paciente.confirmacaoSenha, 'Confirmação de senha inválida!')
            equalsOrError(paciente.senha, paciente.confirmacaoSenha, 'Senhas não conferem!')

            const pacienteFromDB = await app.db('pessoa')
                .where({cpf : paciente.cpf}).first()

            notExistsOrError(pacienteFromDB, 'Paciente já cadastrado!')
            
        } catch (msg) {
            return res.status(400).send(msg)
        }
        

        paciente.senha = encriptarSenha(paciente.senha)
        delete paciente.confirmacaoSenha

        const data = new Date(paciente.data_nascimento)
        paciente.data_nascimento = data.toLocaleDateString()

        const pessoa = {}

        pessoa.cpf = paciente.cpf
        pessoa.nome = paciente.nome
        pessoa.senha = paciente.senha

        delete paciente.cpf
        delete paciente.nome
        delete paciente.senha

        await app.db('pessoa').insert(pessoa)
            
        const idPessoa = await app.db('pessoa')
            .select('id_pessoa')
            .where({cpf: pessoa.cpf})

        paciente.id_pessoa = idPessoa[0].id_pessoa

        await app.db('paciente')
            .insert(paciente)
            .then(_=> res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    return { salvar }
}
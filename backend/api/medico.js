const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validacao

    const encriptarSenha = senha => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(senha, salt)
    }

    const salvar = async (req, res) => {

        const medico = { ...req.body }

        try {
            existsOrError(medico.cpf, 'CPF não informado!')
            existsOrError(medico.nome, 'Nome não informado!')
            existsOrError(medico.crm, 'CRM não informado!')
            existsOrError(medico.tipo, 'Tipo de médico não informado!')
            existsOrError(medico.senha, 'Senha não informada!')
            existsOrError(medico.confirmacaoSenha, 'Confirmação de senha inválida!')
            equalsOrError(medico.senha, medico.confirmacaoSenha, 'Senhas não conferem!')

            const medicoFromDB = await app.db('pessoa')
                .where({cpf : medico.cpf}).first()

            notExistsOrError(medicoFromDB, 'Médico já cadastrado!')
            
        } catch (msg) {
            return res.status(400).send(msg)
        }
        
        // Temporario 
        delete medico.tipo

        medico.senha = encriptarSenha(medico.senha)
        delete medico.confirmacaoSenha

        const pessoa = {}

        pessoa.cpf = medico.cpf
        pessoa.nome = medico.nome
        pessoa.senha = medico.senha

        delete medico.cpf
        delete medico.nome
        delete medico.senha

        await app.db('pessoa').insert(pessoa)
            
        const idPessoa = await app.db('pessoa')
            .select('id_pessoa')
            .where({cpf: pessoa.cpf})

        medico.id_pessoa = idPessoa[0].id_pessoa

        await app.db('medico')
            .insert(medico)
            .then(_=> res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    return { salvar }
}
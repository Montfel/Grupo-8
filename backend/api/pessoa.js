const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validacao

    const encriptarSenha = senha => {
        const salt = bcrypt.genSaltSync(10)
        
        return bcrypt.hashSync(senha, salt) 
    }

    const salvar = async(req, res) => {
        const pessoa = { ...req.body}

        try{
            existsOrError(pessoa.cpf, "CPF não informado!")
            existsOrError(pessoa.nome, "Nome não informado!")
            existsOrError(pessoa.senha, "Senha não informada!")
            existsOrError(pessoa.confirmacaoSenha, "Confirmação de senha não informada!")
            equalsOrError(pessoa.senha, pessoa.confirmacaoSenha, "Senhas não conferem!")
            
            const pessoaFromDB = await app.db("pessoa") 
                .where({cpf: pessoa.cpf}).first()

            notExistsOrError(pessoaFromDB, "Usuário já cadastrado!") 

        } catch (msg) {
            return res.status(400).send(msg)
        }

        pessoa.senha = encriptarSenha(pessoa.senha)
        delete pessoa.confirmacaoSenha 
        
        await app.db("pessoa")
            .insert(pessoa)
            .then(_=> res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    return { salvar }
}
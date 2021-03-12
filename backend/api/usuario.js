const bcrypt = require('bcrypt-nodejs')
module.exports = app => {

    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validacao
    const { Pessoa } = app.classes.pessoa
    const { Medico } = app.classes.medico
    const { Residente } = app.classes.residente
    const { Paciente } = app.classes.paciente
    const { Professor } = app.classes.professor

    const encriptarSenha = senha => {
        const salt = bcrypt.genSaltSync(10)
        
        return bcrypt.hashSync(senha, salt) 
    }

    const salvar = async(req, res) => {

        const usuario = { ...req.body}

        try{
            
            existsOrError(usuario.cpf, "CPF não informado!")
            existsOrError(usuario.nome, "Nome não informado!")
            existsOrError(usuario.senha, "Senha não informada!")
            existsOrError(usuario.confirmacaoSenha, "Confirmação de senha não informada!")
            equalsOrError(usuario.senha, usuario.confirmacaoSenha, "Senhas não conferem!")

            if (isMedico(usuario.tipo_registro)) {
                await validaMedico(usuario, res)
            }

            if (isPaciente(usuario.tipo_registro)) {
                validaPaciente(usuario, res)
            }
        
            const usuarioFromDB = await app.db("pessoa") 
                .where({cpf: usuario.cpf}).first()

            notExistsOrError(usuarioFromDB, "Usuário já cadastrado!") 

        } catch (msg) {
            return res.status(400).send(msg)
        }

        usuario.senha = encriptarSenha(usuario.senha)
        delete usuario.confirmacaoSenha 

        if (isMedico(usuario.tipo_registro)) {
            delete usuario.tipo_registro

            if (isResidente(usuario.tipo_medico)) {
                delete usuario.tipo_medico

                const residente = new Residente(usuario.cpf, usuario.nome, usuario.senha, usuario.crm, usuario.ano_residencia)
                residente.salvarDados()

            } else if (isProfessor(usuario.tipo_medico)) {
                delete usuario.tipo_medico

                const professor = new Professor(usuario.cpf, usuario.nome, usuario.senha, usuario.crm, usuario.titulacao)
                professor.salvarDados()

            } else {
                delete usuario.tipo_medico

                const medico = new Medico(usuario.cpf, usuario.nome, usuario.senha, usuario.crm)
                medico.salvarDados() 
            }
        }
        else if (isPaciente(usuario.tipo_registro)){
            delete usuario.tipo_registro

            const paciente = new Paciente(usuario.cpf, usuario.nome, usuario.senha, usuario.cor, usuario.sexo, usuario.data_nascimento)
            paciente.salvarDados() 
        }

        res.status(204).send()
    }










    // ----------- Funções ---------------

    function isMedico(tipo) {
        if (tipo === 'medico') {
            return true
        }
        return false
    }

    async function validaMedico(dados, res) {
        try {
            existsOrError(dados.crm, "CRM não informado!")
                
            if (isResidente(dados.tipo_medico)) {
                existsOrError(dados.ano_residencia, "Ano de residência não informado!")  

            } else if (isProfessor(dados.tipo_medico)) {
                existsOrError(dados.titulacao, "Titulação não informada!")  
            }

            const medicosFromDB = await app.db('medico')
                .where({crm: dados.crm})
                .first()

            notExistsOrError(medicosFromDB, "Médico já cadastrado!")

        } catch (msg) {
            return res.status(400).send(msg)
        }
    }

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

    function isPaciente(tipo) {
        if (tipo === 'paciente') {
            return true
        }
        return false
    }

    function validaPaciente(dados, res) {
        try {
            existsOrError(dados.cor, 'Cor não informada!')
            existsOrError(dados.sexo, 'Sexo não informada!')
            existsOrError(dados.data_nascimento, 'Data de nascimento não informada!')

        } catch (msg) {
            return res.status(400).send(msg)
        }
    }
    

    return { salvar }
}
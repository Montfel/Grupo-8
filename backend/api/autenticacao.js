const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {

        if (!req.body.cpf || !req.body.senha) {
            return res.status(400).send('Informe CPF e senha!')
        }

        const user = await app.db('pessoa')
            .where({cpf: req.body.cpf})
            .first()

        if (!user) return res.status(400).send('Usuário não encontrado!')

        const isMatch = bcrypt.compareSync(req.body.senha, user.senha)
        if (!isMatch) return res.status(401).send('CPF/senha inválidos!')

        const now = Math.floor(Date.now() / 1000)

        const playload = {
            id_pessoa: user.id_pessoa,
            cpf: user.cpf,
            nome: user.nome,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        res.json({
            ...playload,
            token: jwt.encode(playload, authSecret)
        })
    }

    const validateToken = async (req, res) => {
        const userData = req.body || null

        try {
            if (userData) {
                const token = jwt.decode(userData.token, authSecret)
                if (new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch(e) {

        }
        
        res.send(false)
    }

    return { signin, validateToken }
}
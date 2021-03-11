const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api/validacao.js')
    .then('./classes/pessoa.js')
    .then('./classes/medico.js')
    .then('./api')
    .then('./config/rotas.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executado com sucesso!')
})
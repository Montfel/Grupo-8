const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./config/tipoExame.js')
    .then('./config/tipoStatus.js')
    .then('./api/validacao.js')
    
    .then('./classes/pessoa.js')
    .then('./classes/medico.js')
    .then('./classes/professor.js')
    .then('./classes/paciente.js')
    .then('./classes/residente.js')
    .then('./classes/exame.js')

    .then('./api/professor.js')
    .then('./api/residente.js')
    .then('./api/medico.js')
    .then('./api/paciente.js')

    
    .then('./api')
    .then('./config/rotas.js')
    .into(app)

module.exports = app;

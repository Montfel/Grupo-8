module.exports = app => {
    app.post('/signin', app.api.autenticacao.signin)
    app.post('/validateToken', app.api.autenticacao.validateToken)

    app.route('/medico')
        .post(app.api.medico.salvar)

    app.route('/paciente')
        .post(app.api.paciente.salvar)
        
}
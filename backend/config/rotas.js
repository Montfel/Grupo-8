module.exports = app => {
    app.post('/signin', app.api.autenticacao.signin)
    app.post('/validateToken', app.api.autenticacao.validateToken)

    app.route('/usuario')
        .post(app.api.usuario.salvar) 
}
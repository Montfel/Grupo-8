module.exports = app => {
    app.post('/signin', app.api.autenticacao.signin)
    app.post('/validateToken', app.api.autenticacao.validateToken)

    app.route('/registro/:tipo')
        .post(app.api.usuario.salvar) 

    app.route('/pessoa/:tipo/:id_pessoa')
        .delete(app.api.usuario.remover)
}
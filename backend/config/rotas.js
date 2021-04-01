module.exports = app => {
    app.post('/signin', app.api.autenticacao.signin)
    app.post('/validateToken', app.api.autenticacao.validateToken)

    app.route('/registro/:tipo')
        .post(app.api.usuario.salvar) 

    app.route('/pessoa/:tipo/:id_pessoa')
        .delete(app.api.usuario.remover)

    app.route('/usuario/:id_pessoa')
        .put(app.api.usuario.atualizar)

    app.route('/usuarios')
        .get(app.api.usuario.listar)

    app.route('/medicos/:tipo')
        .get(app.api.medico.listarMedicos)

    
}
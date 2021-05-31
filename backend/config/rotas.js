const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../frontend/src/assets/uploads/')
    },

    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

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

    app.route('/medicos/:tipo/:id')
        .get(app.api.medico.listarMedicosPeloId)

    app.route('/exame')
        .post(app.api.exame.salvarExame)
        
    app.route('/laudo')
        .post(upload.single('imagem'),app.api.laudo.salvarLaudo)

    
}
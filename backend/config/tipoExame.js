module.exports = app => {

    const existeExames =  async () => {
        const exames = await app.db('tipo_exame')

        if (exames.length > 0) {
            return true
        }
        return false
    }

    const registrarExames = async () => {
        const tipoExames = ['EcoCardiograma', 'Eletrocardiograma', 'Mapa', 'Holter']

        if (!await existeExames()) {

           tipoExames.forEach(async exame => {
                const obj = {'nome_exame': exame}
                await app.db('tipo_exame').insert(obj)
           });
        }
    }

    registrarExames()
}
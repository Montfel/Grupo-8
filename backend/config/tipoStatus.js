module.exports = app => {

    const existeStatus =  async () => {
        const status = await app.db('tipo_status')

        if (status.length > 0) {
            return true
        }
        return false
    }

    const registrarStatus = async () => {
        const tipoStatus = ['Pendente', 'Em análise', 'Expirado', 'Finalizado']

        if (!await existeStatus()) {

           tipoStatus.forEach(async status => {
                const obj = {'status': status}
                await app.db('tipo_status').insert(obj)
           });
        }
    }

    registrarStatus()
}
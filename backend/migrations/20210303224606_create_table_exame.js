
exports.up = function(knex) {
    return knex.schema.createTable('exame', table => {
        table.increments('id').primary()
        table.date('data_solicitada').notNull()
        table.date('data_prevista')
        table.date('data_realizada')
        table.string('hipotese')
        table.string('recomendacoes')
        table.string('imagem')
        table.string('laudo')
        table.integer('crm').references('crm')
            .inTable('medico').notNull()
        table.integer('cpf').references('cpf')
            .inTable('paciente').notNull()
        table.string('id_tipo_status').references('id_tipo_status')
            .inTable('tipo_status').notNull()
        table.string('id_tipo_exame').references('id_tipo_exame')
            .inTable('tipo_exame').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('exame')
};


exports.up = function(knex) {
    return knex.schema.createTable('Exame', table => {
        table.increments('id').primary()
        table.date('data_solicitada').notNull()
        table.date('data_prevista')
        table.date('data_realizada')
        table.string('hipotese')
        table.string('recomendacoes')
        table.string('imagem')
        table.string('laudo')
        table.integer('crm').references('crm')
            .inTable('Medico').notNull()
        table.integer('cpf').references('cpf')
            .inTable('Paciente').notNull()
        table.string('id_tipo_status').references('id_tipo_status')
            .inTable('Tipo_Status').notNull()
        table.string('id_tipo_exame').references('id_tipo_exame')
            .inTable('Tipo_Exame').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Exame')
};

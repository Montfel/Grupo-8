
exports.up = function(knex) {
    return knex.schema.createTable('exame', table => {
        table.increments('id').primary()
        table.date('data_exame').notNull()
        table.string('hipotese')
        table.string('recomendacoes')
        table.string('imagem')
        table.date('data_realizada')
        table.string('laudo')
        table.string('crm').references('crm')
            .inTable('medico')
        table.integer('id_paciente').references('id_paciente')
            .inTable('paciente').notNull()
        table.integer('id_tipo_status').references('id_tipo_status')
            .inTable('tipo_status').notNull()
        table.integer('id_tipo_exame').references('id_tipo_exame')
            .inTable('tipo_exame').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('exame')
};

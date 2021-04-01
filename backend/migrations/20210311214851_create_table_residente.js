
exports.up = function(knex) {
    return knex.schema.createTable('residente', table => {
        table.increments('id_residente').primary()
        table.date('ano_residencia_inicio').notNull()
        table.date('ano_residencia_fim')
        table.string('crm').references('crm')
            .inTable('medico').notNull()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('residente')
};

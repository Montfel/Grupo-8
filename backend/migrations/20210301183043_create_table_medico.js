exports.up = function(knex) {
    return knex.schema.createTable('Medico', table => {
        table.integer('crm').primary()
        table.integer('id_pessoa').references('id_pessoa')
            .inTable('Pessoa').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Medico')
};

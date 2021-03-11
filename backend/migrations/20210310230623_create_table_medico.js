exports.up = function(knex) {
    return knex.schema.createTable('medico', table => {
        table.string('crm').primary()
        table.integer('id_pessoa').references('id_pessoa')
            .inTable('pessoa').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('medico')
};


exports.up = function(knex) {
    return knex.schema.createTable('professor', table => {
        table.increments('id_professor').primary()
        table.string('titulacao').notNull()
        table.string('crm').references('crm')
            .inTable('medico').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('professor')
};

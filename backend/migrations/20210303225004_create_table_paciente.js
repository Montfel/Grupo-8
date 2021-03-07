
exports.up = function(knex) {
    return knex.schema.createTable('paciente', table => {
        table.increments('id_paciente').primary()
        table.string('cor').notNull(),
        table.string('sexo').notNull()
        table.date('data_nascimento').notNull()
        table.integer('id_pessoa').references('id_pessoa')
            .inTable('pessoa').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('paciente')
};

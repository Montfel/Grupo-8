
exports.up = function(knex) {
    return knex.schema.createTable('Paciente', table => {
        table.integer('cpf').primary()
        table.string('cor').notNull()
        table.string('sexo').notNull()
        table.string('data_nascimento').notNull()
        table.integer('id_pessoa').references('id_pessoa')
            .inTable('Pessoa').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Paciente')
};

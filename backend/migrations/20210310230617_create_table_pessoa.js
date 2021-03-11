
exports.up = function(knex) {
    return knex.schema.createTable('pessoa', table => {
        table.increments('id_pessoa').primary()
        table.integer('cpf').notNull()
        table.string('nome').notNull()
        table.string('senha').notNull()
        table.boolean('adm').defaultTo(false)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pessoa')
};


exports.up = function(knex) {
    return knex.schema.createTable('Tipo_Exame', table => {
        table.increments('id_tipo_exame').primary()
        table.string('nome_exame').notNull()
    })
    
};

exports.down = function(knex) {
    return knex.schema.dropTable('Tipo_Exame')
};


exports.up = function(knex) {
    return knex.schema.createTable('Tipo_Status', table => {
        table.increments('id_tipo_status').primary()
        table.string('status').notNull()
    })
    
};

exports.down = function(knex) {
    return knex.schema.dropTable('Tipo_Status')
};

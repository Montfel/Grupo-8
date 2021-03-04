
exports.up = function(knex) {
    return knex.schema.createTable('tipo_status', table => {
        table.increments('id_tipo_status').primary()
        table.string('status').notNull()
    })
    
};

exports.down = function(knex) {
    return knex.schema.dropTable('tipo_status')
};

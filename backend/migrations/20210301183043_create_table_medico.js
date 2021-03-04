const { table } = require("../config/db");

exports.up = function(knex) {
    return knex.schema.createTable('medicos', table => {
        table.integer('CRM').primary().notNull()
        table.string('Nome').notNull()
        table.string('Senha').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('medicos')
};

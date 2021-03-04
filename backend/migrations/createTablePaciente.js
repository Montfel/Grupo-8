const { table } = require("../config/db");

exports.up = function(knex) {
    return knex.schema.createTable('paciente', table => {
        table.integer('cpf').primary().notNull()
        table.string('cor').notNull()
        table.string('sexo').notNull()
        table.string('data_nascimento').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('paciente')
};

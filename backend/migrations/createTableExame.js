const { table } = require("../config/db");

exports.up = function(knex) {
    return knex.schema.createTable('exame', table => {
        table.integer('id').primary().notNull()
        table.string('nome').notNull()
        table.string('data_solicitada').notNull()
        table.string('data_prevista').notNull()
        table.string('data_realizada').notNull()
        table.string('hipotese').notNull()
        table.string('recomendacoes').notNull()
        table.string('status').notNull()
        table.string('imagem').notNull()
        table.string('laudo').notNull()
        table.integer('crm').notNull()
        table.integer('cpf').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('exame')
};

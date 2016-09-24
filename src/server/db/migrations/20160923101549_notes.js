exports.up = function(knex) {
  return knex.schema.createTable('notes', (table) => {
    table.increments();
    table.text('body').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('notes');
};

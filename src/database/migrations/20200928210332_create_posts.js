
exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
    table.increments('post_id').notNullable();
    table.string('path').notNullable();
    table.string('post_title').notNullable();
    table.string('post_content').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};

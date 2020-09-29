
exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
    table.increments('post_id').notNullable();
    table.string('post_title').notNullable();
    table.string('post_content').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};

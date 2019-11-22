
// exports.up = function(knex) {
//   return knex.schema.createTable('users', users => {
//     users.increments()
//     users.string('username')
//     .unique()
//     .notNullable()
//     users.string('password')
//     .notNullable()
//   })
// };

// exports.down = function(knex) {
//   return knex.schema.dropTableIfExists('users')
// };


exports.up = function(knex) {

  return knex.schema
  // .createTable('users', users => {
  //   users.increments()
  //   users.string('username')
  //   .unique()
  //   .notNullable()
  //   users.string('password')
  //   .notNullable()
  // })

  .createTable('categories', cate => {
    cate.increments()
    cate.string('category')
    .notNullable()
  })

  .createTable('tabs', tabs => {
    tabs.increments()
    tabs.string('url')
    .notNullable()
    tabs.string('name')
    tabs.string('notes')
    tabs.integer('user_id')
    // .unsigned()
    // .onUpdate('CASCADE')
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .notNullable()
    tabs.integer('category_id')
    // .unsigned()
    // .onUpdate('CASCADE')
    .references('id')
    .inTable('categories')
    .onDelete('CASCADE')
    .defaultsTo("uncategorized")
    .notNullable()
  })
};

exports.down = function(knex) {
   return knex.schema
  .dropTableIfExists('tabs')
  .dropTableIfExists('categories')
  // .dropTableIfExists('users')
};


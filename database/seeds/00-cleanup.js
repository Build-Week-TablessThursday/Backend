// const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  const cleaner = require('knex-cleaner');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return cleaner.clean(knex, {
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
  });
};
};

// exports.seed = function(knex){
//   return cleaner.clean(knex, {
//     mode: "truncate",
//     ignoreTables:['knex_migrations', 'knex_migrations_lock']
//   })
// }
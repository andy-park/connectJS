const settings = require("./settings");

var knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('milestones', (table)) =>
      table.increments();
      table.string("description");
      table.date("date_achieved");
      ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones');
    ])
};

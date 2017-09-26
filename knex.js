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

// function printLine(person) {
//   console.log('- ' + person.id + ": " + person.first_name + person.last_name + "born " + person.birthdate);
// }
knex('famous_people')
.where('first_name', '=', process.argv[2])
.orWhere('last_name', '=', process.argv[2])
.asCallback(function(err, rows) {
  if (err) return console.error(err);
  console.log(rows);
  knex.destroy();
});


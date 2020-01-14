exports.up = function (knex, Promise) {
  let createQuery = `CREATE TABLE users_role(
      id SERIAL PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      created_at TIMESTAMP
    )`
  return knex.raw(createQuery)
}

exports.down = function (knex, Promise) {
  let dropQuery = `DROP TABLE users_role`
  return knex.raw(dropQuery)
}
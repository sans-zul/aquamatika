// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    //connection: 'postgres://your_username:your_password@host:port/database_name',
    connection: 'postgres://postgres:sans@127.0.0.1:5432/aquamatika',
    migrations: {
      directory: './config/migrations'
    },
    seeds: {
      directory: './config/dev'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: 'postgres://kgxoytldkwayry:04c77ab64588582b13c2c7c2da122c3cb7b2bdb1a2f4f0d3874de236c08b4b1f@ec2-54-225-106-93.compute-1.amazonaws.com:5432/d4gunggcj2qf67',
    migrations: {
      directory: './config/migrations'
    },
    seeds: {
      directory: './config/dev'
    },
    useNullAsDefault: true
  }

};
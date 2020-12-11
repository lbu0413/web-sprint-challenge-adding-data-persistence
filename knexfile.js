module.exports = {
  development: {
    // complete your knexfile
    client: 'sqlite3',
    migrations: {
      directory: "./data/migrations",
    },
    connection:{
      filename:'./data/migrations/projects.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
  }
  },
};

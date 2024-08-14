const { Sequelize } = require('sequelize')

const Connection = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'fs29'
})

module.exports = Connection;
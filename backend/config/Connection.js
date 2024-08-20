const { Sequelize } = require('sequelize')

const Connection = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'fs29'
})

module.exports = Connection;
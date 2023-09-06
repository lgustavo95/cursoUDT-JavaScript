const env = require('./env.js')

const Sequelize = require('sequelize')

const sequelize = new Sequelize(env.database, env.username, env.password,{
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,

})

const db = {}

db.Sequelize = Sequelize //propria biblioteca sequelize
db.sequelize = sequelize //conexao com DB

db.Cliente = require('../model/cliente.model.js')(sequelize,Sequelize)

module.exports = db
const Sequelize = require('sequelize')
const path = require('path')
const config = require('../../config')

const sequelize = new Sequelize(config.sequelize.url, {
  dialect: 'mysql2',
  protocol: 'mysql2',

})

sequelize.sync({ force: false })

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  Response: sequelize.import(path.join(__dirname, '/response'))
}

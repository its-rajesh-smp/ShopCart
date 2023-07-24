const Sequelize = require("sequelize")
const sequelize = require("../util/database")


const Auth = sequelize.define("auth_table", {
    email: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

module.exports = Auth
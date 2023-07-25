const Sequelize = require("sequelize")
const sequelize = require("../util/database")



const Ad = sequelize.define("ads_table", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    path: {
        type: Sequelize.STRING,
        allowNull: true
    }
})


module.exports = Ad
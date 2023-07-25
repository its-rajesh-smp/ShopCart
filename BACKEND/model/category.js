const Sequelize = require("sequelize")
const sequelize = require("../util/database")



const Category = sequelize.define("category_table", {
    path: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


module.exports = Category
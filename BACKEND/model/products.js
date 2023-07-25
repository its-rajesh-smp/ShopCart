const Sequelize = require("sequelize")
const sequelize = require("../util/database")




const Product = sequelize.define("product_table", {
    productId: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    images: {
        type: Sequelize.JSON,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    discount: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Product
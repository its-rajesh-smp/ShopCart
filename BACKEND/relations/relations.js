const CategoryModel = require("../model/category")
const ProductModel = require("../model/products")

module.exports = () => {
    ProductModel.belongsTo(CategoryModel, {
        foreignKey: 'category'
    })

}
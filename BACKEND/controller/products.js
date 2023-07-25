const Product = require("../model/products")

exports.addProduct = async (req, res) => {
    try {
        const { name, price, images, rating, discount, category } = req.body
        await Product.create({ name, price, images, rating, discount, category })
        res.send(true)
    } catch (error) {
        console.log(error);
        res.send(false)
    }

}



exports.getProduct = async (req, res) => { }
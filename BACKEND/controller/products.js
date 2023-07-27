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



exports.getProductsByCategory = async (req, res) => {
    try {
        const { category, skip } = req.params
        const dbRes = await Product.findAll({
            where: {
                category: category
            },
            offset: +skip,
            limit: 5,
        })

        const totalQuantity = await Product.count({
            where: { category: category }
        })

        res.send({ length: totalQuantity, items: dbRes })

    } catch (error) {
        console.log(error);
        res.send(false)

    }
}
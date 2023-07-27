const Product = require("../model/products")
const { Op } = require("sequelize")

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
        const { category, skip, minPrice, maxPrice, rating, sortBy } = req.params

        /* -------------------------------------------------------------------------- */
        /*                                   FILTER                                   */
        /* -------------------------------------------------------------------------- */
        const where = { category: category }
        if (rating !== 'false') { where.rating = Number(rating) }
        if (minPrice !== 'false') {
            where.price = {
                [Op.gt]: Number(minPrice)
            }
        }
        if (maxPrice !== 'false') {
            where.price = {
                [Op.lt]: Number(maxPrice)
            }
        }


        /* -------------------------------------------------------------------------- */
        /*                                   SORT BY                                  */
        /* -------------------------------------------------------------------------- */
        const order = []
        if (sortBy !== 'false') {
            if (sortBy === "high_to_low") {
                order.push(['price', 'DESC'])
            }
            else if (sortBy === "low_to_high") {
                order.push(['price', 'ASC'])
            }
            else if (sortBy === "discount") {
                order.push(['discount', 'DESC'])
            }
        }


        // FINDING PRODUCTS
        const dbRes = await Product.findAll({
            where,
            offset: +skip,
            limit: 5,
            order
        })

        // FINDING TOTAL COUNT OF THEM
        const totalQuantity = await Product.count({
            where,
            order
        })

        // SENDING TO FRONTEND
        res.send({ length: totalQuantity, items: dbRes })

    } catch (error) {
        console.log(error);
        res.send(false)

    }
}
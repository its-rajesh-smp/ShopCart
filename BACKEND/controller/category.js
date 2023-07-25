const Category = require("../model/category")

exports.addCategory = async (req, res) => {
    try {
        const { name, path, image } = req.body
        const dbRes = await Category.create({ name, image, path })
        console.log(dbRes);

    } catch (error) {
        console.log(error);
        res.send(false)
    }
}


exports.getCategory = (req, res) => { }
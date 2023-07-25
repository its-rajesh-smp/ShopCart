const SliderProduct = require("../model/sliderProduct")


exports.createSliderProduct = async (req, res) => {
    try {
        const { image, path } = req.body
        await SliderProduct.create({ image, path })
        res.send(true)

    } catch (error) {
        console.log(error);
        res.send(false)
    }

}


exports.getSliderProducts = async (req, res) => {
    try {
        const dbResponse = await SliderProduct.findAll()
        res.send(dbResponse)

    } catch (error) {
        console.log(error);
        res.send(false)
    }
}
const Ad = require("../model/ads")


exports.createAd = async (req, res) => {
    try {
        const { image, path } = req.body
        await Ad.create({ image, path })
        res.send(true)

    } catch (error) {
        console.log(error);
        res.send(false)
    }

}


exports.getAds = async (req, res) => {
    try {
        const dbResponse = await Ad.findAll()
        res.send(dbResponse)

    } catch (error) {
        console.log(error);
        res.send(false)
    }
}
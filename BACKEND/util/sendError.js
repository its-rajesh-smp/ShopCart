module.exports = (error, res) => {
    console.log(error);
    res.send({ status: false })
}
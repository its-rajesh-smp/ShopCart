const jwt = require("jsonwebtoken")
const KEY = "shopcart"

exports.encodeJwt = (email, password) => {
    return jwt.sign({ email, password }, KEY)
}


exports.decodeJwt = (token) => {
    if (!token) { return null }
    return jwt.verify(token, KEY)
}
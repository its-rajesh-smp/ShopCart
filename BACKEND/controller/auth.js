const sendError = require("../util/sendError")
const jwt = require("../service/service")
const Auth = require("../model/auth")


exports.createNewUser = async (req, res) => {
    try {
        const { email, password } = req.body
        await Auth.create({ email, password })
        const idToken = jwt.encodeJwt(email, password)

        res.send({ status: true, email: email, idToken: idToken })
    } catch (error) {
        sendError(error, res)
    }


}




exports.loginExistingUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const dbResponse = await Auth.findOne({
            where: {
                email: email,
                password: password
            }
        })
        if (!dbResponse) {
            sendError("NO USER EXIST", res)
            return
        }


        const idToken = jwt.encodeJwt(email, password)
        res.send({ status: true, email: email, idToken: idToken })

    } catch (error) {
        sendError(error, res)
    }
}





exports.getExistingUser = async (req, res) => {
    try {
        const { idToken } = req.body

        const { email, password } = jwt.decodeJwt(idToken)

        const dbResponse = await Auth.findOne({
            where: {
                email: email,
                password: password
            }
        })

        if (!dbResponse) {
            sendError("TOKEN NOT VALID", res)
            return
        }

        res.send({ status: true, email: email, idToken: idToken })

    } catch (error) {
        sendError(error, res)
    }

}
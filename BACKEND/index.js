const express = require("express")
const body_parser = require("body-parser")
const cors = require("cors")
const sequelize = require("./util/database")

const app = express()


// IMPORTING ROUTES
const auth = require("./routes/auth")
const products = require("./routes/products")
const category = require("./routes/category")




// APPLYING MIDDLEWIRES
app.use(body_parser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json())
app.use(auth)
app.use(products)
app.use(category)



// IMPORTING RELATIONS
const relation = require("./relations/relations")
relation()





// STARTING SERVER
sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log("SERVER STARTED");
    })
}).catch((err) => {
    console.log(err);
})
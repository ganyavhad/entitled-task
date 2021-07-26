const mongoose = require("mongoose")

module.exports = function () {
    mongoose.connect(
        `${process.env.DB_URL}/${process.env.DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
        (db) => {
            console.log("Connected to DB")
        }
    )
}
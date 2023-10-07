const mongoose = require("mongoose");

const DataBase = (collection) => {
    try {
        const uri = `mongodb://127.0.0.1:27017/${collection}`;
        mongoose.connect(uri)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { DataBase }
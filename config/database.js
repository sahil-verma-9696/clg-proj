const mongoose = require("mongoose");

const database = (collection)=>{
try {
    mongoose.connect(`mongodb://127.0.0.1:27017/${collection}`)
} catch (error) {
    console.log(error)
}
}

module.exports = database;
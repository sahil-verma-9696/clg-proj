const mongoose = require("mongoose");
const env = require("dotenv").config();

const DataBase = (collection) => {
    try {
        const pass =  process.env.MONGO_PASS;
        const uri = `mongodb+srv://laptopsahil123:${pass}@cluster0.asnbdyu.mongodb.net/${collection}?retryWrites=true&w=majority&appName=AtlasApp`
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        // const uri = `mongodb://127.0.0.1:27017/${collection}`;
        // mongoose.connect(uri)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { DataBase }
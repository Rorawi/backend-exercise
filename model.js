//Bank Model
// let banksDb = require('./db');
const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const BookSchema = new mongoose.Schema ({
        title: String,
        author: String,
       description:String,
       
})


const BookModel = mongoose.model("Book", BookSchema)


module.exports = BookModel
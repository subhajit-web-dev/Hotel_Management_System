const mongoose = require('mongoose')

const laughinnSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const laughinnModel = mongoose.model("laughinn",laughinnSchema)
module.exports = laughinnModel
const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name:String,
    age:Number,
    _id:Number,

})

module.exports = mongoose.model("Demo", schema)
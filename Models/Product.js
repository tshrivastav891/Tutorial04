var mongoose = require('mongoose');
var productSchema = mongoose.Schema({

    pname:String,
    quantity:Number
})
module.exports = mongoose.model('Product',productSchema)   //Product collection
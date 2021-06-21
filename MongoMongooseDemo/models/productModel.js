const mongoose = require('mongoose');
Schema = mongoose.Schema;

var productModel = new Schema({
    id: {type: Number},
    productName: {type: String},
    productCost: {type: Number},
    productDescription: {type: String},
    productImageUrl: {type: String}
})

module.exports = mongoose.model('product', productModel, 'product_details');
//the third argument is the collection name


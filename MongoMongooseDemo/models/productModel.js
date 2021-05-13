const mongoose = require('mongoose');
Schema = mongoose.Schema;

var productModel = new Schema({
    productId: {type: Number},
    productName: {type: String},
    productCost: {type: Number},
    productDescription: {type: String},
    productImageUrl: {type: String}
})

module.exports = mongoose.model('product', productModel, 'product');
//the third argument is the collection name


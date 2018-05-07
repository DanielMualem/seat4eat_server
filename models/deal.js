var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Deal = new Schema({
    storeOwnerID: {type: Schema.ObjectId, ref: 'StoreOwner', required: true},
    storeID: {type: Schema.ObjectId, ref: 'Store', required:true},
    details: {type: String, required: true},
    time: String,
    imgID:{type: Schema.ObjectId, ref: 'Image'}
});

module.exports = mongoose.model('Deal', Deal);
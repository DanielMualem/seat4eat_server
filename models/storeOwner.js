var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var StoreOwner = new Schema({
    username: {type: String, unique: true},
    password: String,
    email: String,
    storeID: {type: Schema.ObjectId, ref: 'Store'},
    mobile: String,
    isMaster: {type: Boolean, default: false}
});

// TODO: plugin might cause problem
StoreOwner.plugin(passportLocalMongoose);

module.exports = mongoose.model('StoreOwner', StoreOwner);
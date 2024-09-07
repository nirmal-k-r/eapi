const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
    },
    category:{
        type: String,
    }
});

module.exports = mongoose.model('product', productSchema);
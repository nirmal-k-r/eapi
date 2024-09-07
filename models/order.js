const mongood = require('mongoose');

const orderSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    items: {
        type: Array,
        required: true
    },
    total:{
        type: Number,
    },
    userId:{
        type: String,
    }
});

module.exports = mongoose.model('order', orderSchema);
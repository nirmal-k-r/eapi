const mongoose = require('mongoose');

connectionString='mongodb+srv://admin:12345@shop.e9p31.mongodb.net/eapi?retryWrites=true&w=majority&appName=shop';

const options = {
    // keepAlive: true,
    // keepAliveInitialDelay: 300000,
    // useNewUrlParser: true,
    // useUnifiedTopology: true
};

mongoose.connect(connectionString, options);
console.log('connected to database');
module.exports = mongoose;

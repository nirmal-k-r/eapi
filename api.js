const fastify= require('fastify');
const mongoose = require('./config.js');
// const helmet = require('fastify-helmet');

//import routes
const productRoutes= require('./routes/products');

//define server
const api = fastify({
        logger: true,
        bodyLimit: 200000000
});


//middleware
// api.register(helmet, {
//     hidePoweredBy: { setTo: 'PHP 4.2.0' }
// });

//connect routes
productRoutes.forEach((route, index) => {
    api.route(route);
});

const start = async () => {
    try{
        await api.listen(3000);
    } catch (err){
        console.log(err);
        process.exit(1);
    }
};

start();



const controller=require('../controllers/products');

const routes =[
    //get all products
    {
        method: 'GET',
        url: '/api/products',
        handler: controller.getAllProducts
    },
    //get single product
    {
        method: 'GET',
        url: '/api/products/:id',
        handler: controller.getProduct
    },
    //add product
    {
        method: 'POST',
        url: '/api/products',
        handler: controller.addProduct
    },
    //update product
    {
        method: 'PUT',
        url: '/api/products/:id',
        handler: controller.updateProduct
    },
    //delete product
    {
        method: 'DELETE',
        url: '/api/products/:id',
        handler: controller.deleteProduct
    }
];

module.exports=routes;
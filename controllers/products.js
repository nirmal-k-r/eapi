const Product = require('../models/product');
const common = require('./common');

exports.getAllProducts= async function getAllproducts(req,res){
    try{    
        const products= await Product.find({});
        // console.log(products);
        return await common.respond(products);
    }catch(e){
        console.log(e);
    }
};

exports.getProduct= async function getProduct(req,res){
    try{
        const product= await Product.find({id: req.params.id});
        return await common.respond(product);
    }catch(e){
        console.log(e);
    }
};

exports.addProduct= async function addProduct(req,res){
    try{
        const product= new Product(req.body);
        await product.save();
        return await common.respond(product);

    }catch(e){
        console.log(e);
    }
}

exports.updateProduct= async function updateProduct(req,res){
    try{
        const product= await Product.findOneAndUpdate({id: req.params.id}, req.body, {new: true});
        await common.respond(product);

    }catch(e){
        console.log(e);
    }
}

exports.deleteProduct= async function deleteProduct(req,res){
    try{
        const product= await Product.deleteOne({id: req.params.id});
        await common.respond(product);
    }catch(e){
        console.log(e);
    }
}


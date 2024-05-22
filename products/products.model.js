const Product = require("./products.schema");
const mongoose = require('mongoose');


// const products = [
//     {
//         id: 'redShoe',
//         description: 'red  shoe',
//         price: 42.12,
//         reviews: []
//     },
//     {
//         id: 'bluejean',
//         description: 'Blue Jeans',
//         price: 55.55,
//         reviews: []
//     }
// ]

async function getAllProducts() {
    return Product.find();
}

async function getProductsByPrice(min, max) {
    const allProducts = await getAllProducts();
    let productByPrice = [];
    allProducts.filter((product) => {
        console.log(product)
        console.log(Math.floor(product.price) >= min && Math.floor(product.price) <= max);
        if(Math.floor(product.price) >= min && Math.floor(product.price) <= max)
            {
                productByPrice.push(product) ;
            }
    })
    return productByPrice;
}


async function getProductById(id) {
    try
    {
        return await Product.findById(new mongoose.Types.ObjectId(id))
    }
    catch(err)
    {
        console.error("Error fetching product by ID:", error);
        return null;
    }  
}

async function addNewProduct(id, description, price) {
    const newProduct = new Product({
        price,
        description,
        reviews: []
    });
    await newProduct.save()
    return newProduct;
}

async function addNewProductReview(id, rating, comment) {
    try
    {

        const product = await Product.findById(id);

        if(product){
            const review = {
                rating,
                comment:comment?comment:""
            }
            let productReviews = product.review;

            productReviews=[...productReviews,review];


            const updatedProduct = await Product.findByIdAndUpdate(new mongoose.Types.ObjectId(id), 
            // {review : [rating,comment]}, 
            {review : productReviews}, 
            {new : true});
            console.log("updated product-------",updatedProduct);
            return updatedProduct;            

        }



        return null
    }
    catch(e)
    {
        console.log("error while updaing review---",e);
    }
    return null;
}

async function updateProduct(id, description, price)
{   
    try
    {
        return await Product.findByIdAndUpdate(new mongoose.Types.ObjectId(id), {description : description, price : price}, {new : true});
    }
    catch(err)
    {
        console.log("err while updating product--", err);   
    }
}

async function deleteProduct(id)
{
    try
    {
        await Product.findByIdAndDelete(new mongoose.Types.ObjectId(id));
        return "Product Deleted Successfully";
    }
    catch(err)
    {
        console.log("error while deleting product--", err);
    }   
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview,    
    updateProduct,
    deleteProduct
}
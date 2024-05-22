const productModel = require('./products.model')

module.exports = {
    Query: {
        products: () => {
            //console.log(productModel.getAllProducts);
            return productModel.getAllProducts();
        },
        productsByPrice: (parent, args) => {
            return productModel.getProductsByPrice(args.min, args.max);
        },
        product: (_, args) => {
            return productModel.getProductById(args.id);
        }
    },
    Mutation: {
        addNewProduct: (_, args) => {
            return productModel.addNewProduct( args.description, args.price);
        },
        addNewProductReview: (_, args) => {
            return productModel.addNewProductReview(args.id, args.rating, args.comment);
        },
        updateProduct : (_, args) => {
            return productModel.updateProduct(args.id, args.description, args.price);
        },
        deleteProduct : (_, args) => {
            return productModel.deleteProduct(args.id);
        }
    }
};
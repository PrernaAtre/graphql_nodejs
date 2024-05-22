const products = [
    {
        id: 'redShoe',
        description: 'red  shoe',
        price: 42.12,
        reviews: []
    },
    {
        id: 'bluejean',
        description: 'Blue Jeans',
        price: 55.55,
        reviews: []
    }
]

function getAllProducts() {
    console.log(products);
    return products;
}

function getProductsByPrice(min, max) {
    products.filter((product) => {
        return product.price >= min && product.price <= max;
    })
}
function getProductById(id) {
    return products.find((product) => {
        return product.id == id
    })
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        price,
        description,
        reviews: []
    };
    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id, rating, comment) {
    const matchedProduct = getProductById(id);
    if (matchedProduct) {
        const newProductReview = {
            rating,
            comment
        }
        matchedProduct.reviews.push(newProductReview);
        return newProductReview;
    }
    return null;
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview
}
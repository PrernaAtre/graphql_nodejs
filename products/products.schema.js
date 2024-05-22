const {Schema,model}=require('mongoose')

const productSchema = new Schema({
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    review:{
        type:[],
        required:false
    }
})

const Product = model("Product",productSchema)

module.exports=Product;
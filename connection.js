const mongoose = require("mongoose");

console.log(process.env.username);
console.log(process.env.password);
mongoose.connect(`mongodb+srv://${process.env.username}:${process.env.password}@cluster0.89cuca2.mongodb.net/graphqlPractice?retryWrites=true&w=majority&appName=Cluster0`)
        .then(()=>{
            console.log("connection successful with database");
        })
        .catch((e)=>{
            console.log("error while connecting Database : ",e);
        })  
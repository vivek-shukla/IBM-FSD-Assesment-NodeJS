const productDatabase = require('../database/productDatabase').productDatabase

class Product {
    constructor() {
        this.productDatabase = productDatabase
    }
     getAllProduct() {
         return this.productDatabase
     }
     addProduct(product) {
         this.productDatabase.push(product)
         return this.productDatabase
     }
     searchProduct(product) {
         return this.productDatabase.find((p)=>{
             return p.name == product.name
         })
     }

}

module.exports.productClass = Product
class Cart {
     constructor() {
         this.cart = []
     }
     getCart() {
         return this.cart
     }
     addToCart(item) { 
        //  itemExist = this.serachInCart(item.name)
        //  if(itemExist != null && itemExist !== undefined)  
        //  {
        //      this.cart.forEach(itm=>{

        //      })
        //  }
         // it was working fine
         this.cart.push(item) 
         return this.cart
     }
     serachInCart(itm) {
        return this.cart.find(item=>{
              return item.name == itm.name
         })
     }
} 

module.exports.cartClass = Cart
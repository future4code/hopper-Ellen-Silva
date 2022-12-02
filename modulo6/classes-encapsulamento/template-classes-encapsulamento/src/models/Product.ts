export class Product{
   public id: string
   public name: string
   public price: number


   constructor(id:string, name:string, price:number){
    this.id = id,
    this.name = name,
    this.price = price
   }

   getProcducts(){
    return this.id
   }
}

const products = new Product(Date.now().toString(), "Chocolate", 12)
console.log(products)
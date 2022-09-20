export type Labecommerce_users = {
    id:number,
    name:string,
    email:string,
    password:string
}

export type labecommerce_products = {
    id:number,
    name:string,
    price:number,
    image_url:string
}


export let users: Labecommerce_users[] =[
 {
    id:0,
    name:"",
    email:"",
    password:""
}]

export let products: labecommerce_products[] = [
    {
        id:0,
        name:"",
        price:0,
        image_url:""
    }
]
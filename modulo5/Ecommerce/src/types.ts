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

export type labecommerce_purchases = {
    id:number,
    user_id:string,
    product_id:string,
    quantity:number,
    total_price:number
}

export type aula_webservices_users  = {
    id:number,
    name:string,
    nickname:string,
    email:string,
    zipcode:number
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

export let buy: labecommerce_purchases[] = [
    {
        id:0,
        user_id:"",
        product_id:"",
        quantity:0,
        total_price:0
    }
]


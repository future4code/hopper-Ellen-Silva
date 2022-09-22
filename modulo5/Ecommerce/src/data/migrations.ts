import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
   CREATE TABLE labecommerce_users(
      id INT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL)
      `)

   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const createTableProducts = () => connection
   .raw(`
      CREATE TABLE labecommerce_products(
         id INT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         price INT NOT NULL,
         image_url VARCHAR (1000) NOT NULL)
      `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const createTableRegister = () => connection
   .raw(`
      CREATE TABLE labecommerce_purchases(
         id VARCHAR(200) PRIMARY KEY,
         user_id INT NOT NULL,
         product_id INT NOT NULL,
         quantity INT,
         total_price INT,

         FOREIGN KEY(user_id) REFERENCES labecommerce_users(id),
         FOREIGN KEY(product_id) REFERENCES labecommerce_products(id));
      `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)



const closeConnection = () => { connection.destroy() }

createTables()
createTableProducts()
createTableRegister()

   .finally(closeConnection)






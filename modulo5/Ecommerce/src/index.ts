import { app } from "./app"
import {postUsers} from "./PostUsers"
import {getAllUsers} from "./GetAllUsers"
import {postAllProducts} from "./PostAllProducts"
import {getAllProducts} from "./GetAllProducts"

app.post("/users",postUsers)
app.get("/users",getAllUsers)
app.post("/products", postAllProducts)
app.get("/products",getAllProducts)

   
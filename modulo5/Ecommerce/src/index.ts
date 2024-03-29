import { app } from "./app"
import {postUsers} from "./PostUsers"
import {getAllUsers} from "./GetAllUsers"
import {postAllProducts} from "./PostAllProducts"
import {getAllProducts} from "./GetAllProducts"
import { postBuy } from "./PostBuy"
import { getBuy } from "./GetBuy"
import createUser from "./CreateUsers"


app.post("/users",postUsers)
app.get("/users",getAllUsers)
app.post("/products", postAllProducts)
app.get("/products",getAllProducts)
app.post("/purchases",postBuy)
app.get("/users/:user_id/purchases",getBuy)
app.post("/users/signup",createUser)

   
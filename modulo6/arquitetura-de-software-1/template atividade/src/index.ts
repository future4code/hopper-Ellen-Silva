import {app} from "./app"
import { createUser,get } from "./controller/userController"


app.post("/createUser", createUser)
app.get("/all", get)




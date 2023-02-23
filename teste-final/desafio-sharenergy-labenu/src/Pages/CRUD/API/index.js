import express from "express"
import userRoutes from "./routes/user.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)

app.listen(3000)
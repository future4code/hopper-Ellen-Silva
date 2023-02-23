import express from "express"
import {getUsers} from ".../controller/users"

const router = express.Router(
    router.get("/", getUsers)
)

export default router
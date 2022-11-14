import { application } from "express";
import { app } from "./app";
import { getAllUsers } from "./endpoints/exercicio/exercicio1A";
import { getAllTypes } from "./endpoints/exercicio1B/exercicio1B";
import { getAllSorte } from "./endpoints/exercicio2/exercicio2";
import { getAllPage } from "./endpoints/exercicio3/exercicio3";





app.get("/users", getAllUsers)
app.get("/users/type",getAllTypes)
app.get("/users/sort",getAllSorte)
app.get("/users/page",getAllPage)




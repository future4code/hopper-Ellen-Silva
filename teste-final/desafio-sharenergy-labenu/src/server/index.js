const { query } = require("express")
const express = require("express")
const app = express()
const mysql = require("mysql")
const cors= require("cors")

const db = mysql.createPool({
    host:"35.226.146.116",
    user:"4313268-ellen-silva",
    password:"ellen-silva2022",
    database:"Hopper-4313268-ellen-silva",
})
app.use(cors())
app.use(express.json())

app.post('/cadastro',(req,res)=>{
    const{name} = req.body
    const{email} = req.body
    const{phone} = req.body
    const{cpf} = req.body

    console.log(name)

    let SQL = "INSERT INTO CRUD (name, email, phone, cpf) VALUES (?, ?, ?, ?);";

    db.query(SQL,[name,email,phone,cpf],(err,result)=>{
        console.log(err)
    })
    res.status(201).send()
})

    app.get('/getCadastro',(req,res)=>{
        let SQL = "SELECT * from CRUD"

        db.query(SQL,(err,result)=>{
            if(err) console.log(err)
            else res.send(result)
        })
    })

    app.put('/editar',(req,res)=>{
    const{id} = req.body
    const{name} = req.body
    const{email} = req.body
    const{phone} = req.body
    const{cpf} = req.body

    console.log(name)

    let SQL = "UPDATE CRUD SET name=?, email=?, phone=?, cpf=?  WHERE id=?;";

    db.query(SQL,[name,email,phone,cpf,id],(err,result)=>{
        console.log(err)
    })
    
    })

    app.delete('/excluir/:id', (req,res)=>{
        const{id} = req.params
       
        console.log(id)
    
        let SQL = "DELETE FROM CRUD WHERE id=?;";
    
        db.query(SQL,[id],(err,result)=>{
            console.log(err)
        })

        res.status(204).send()
    })

app.listen(3001, ()=>{
    console.log("servidor rodando")
})
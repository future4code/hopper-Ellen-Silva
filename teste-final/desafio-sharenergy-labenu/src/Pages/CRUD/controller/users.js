import { db } from "../API/db";

export const getUsers = (_,res) =>{
    const query = "SELECT * FROM Usuario";

    db.query(query, (error,data)=>{
        if(error) return res.json(error)

        return res.status(200).json(data)
    })
}
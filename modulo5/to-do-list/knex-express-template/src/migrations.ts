import connection from "./connection";

const ToDoList = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS Usuarios (
            id BIGINT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            nickname VARCHAR(200) NOT NULL,
            email VARCHAR(255) NOT NULL
            );
        `)

        console.log("To do list criada com sucesso.")
    } catch (error:any) {
        console.log("Erro ao criar tabela To do list.")
        console.log(error.sqlMessage)
    }
}

async function CriarUsuarios() {
    try {
        await connection.raw(`
            INSERT INTO Usuarios(id, name, nickname, email)
            VALUES 
            (1, "Ellen", "Ellenls", "ellen@gmail.com"),
            (2, "Gabriela", "Gabi", "gabi@gmail.com"),
            (3, "Carlos", "Carlito", "carlos@gmail.com"),
            (4, "Diego", "Didi", "deigo@gmail.com"),
            (5, "Emilia", "Emi", "mimi@gmail.com");
        `)
        
        console.log("Lista criada com sucesso.")
    } catch (error:any) {
        console.log("Erro ao popular tabela .")
        console.log(error.sqlMessage)
    }
}

ToDoList()
.then(() => CriarUsuarios())
.finally(() => process.exit())
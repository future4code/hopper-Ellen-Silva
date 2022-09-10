import express, { Request, Response } from "express"
import cors from "cors"
import { users } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
})

app.listen(3003, () => console.log("Servidor disponível em 3003"))

// app.get("/playlists", (req:Request, res:Response) => {
//   // tenho todos os usuários
//   const currentUsers = users // array de objetos
//   console.log(1, currentUsers);

//   // Vou pegar as playlists de cada usuário
//   const userPlaylists = currentUsers.map((user: any) => {
//     return user.playlists 
//   }) // array de arrays
//   console.log(2, userPlaylists)

//   const result = userPlaylists.flat(1)

//   res.status(200).send(result);
// })

// // 1. A Pesquisar playlist
// app.get("/playlists/search",(req:Request, res:Response)=>{
//   const queriedName = req.query.name
//   if(!queriedName){
//     res.status(400).send("Faltou uma query no nome!")
//   }
//   // array que vai guardar o resultado da pesquisa 
//   const searchResult =[]
//   // Para entrar em usuários 
//   for(let user of users){
//   // Para depois de entrar em usuariuos vai iterar a playlist
//     for(let playlist of user.playlists){
//   // playlist.name === queriedName => Esse seria o match perfeito
//   // Vamos utilizar o includes pois precisa trazer as playlist que 
//   // contenham pelo menos oq o usuario digitou
//       if(playlist.name.includes(queriedName)){
//         searchResult.push({
//           id: playlist.id,
//           name :playlist.name
//         })
//       }
//     }
//   }
//   res.send({searchResult})

// })


// app.get("/tracks", (req:Request, res:Response) => {
//   const playlistId = req.query.id

//   if(!playlistId) res.status(400).send("Não é possível realizar a operação. ID da playlista ausente")

//   const allPlaylists = users.map((user: any) => {
//     return user.playlists
//   }).flat(1)

//   let tracks;

//   allPlaylists.forEach((playlist: any) => {
//     if (playlist.id === playlistId) {
//       tracks = playlist.tracks
//     }
//   })

//   res.status(200).send(tracks)
// })

// app.delete("/playlist", (req:Request, res:Response) => {
//   const id = req.query.id

//   users.forEach((user: any) => {
//     user.playlists = user.playlists.map((playlist: any) => {
//       if (playlist.id === id) {
//         return {}
//       }
//       return playlist
//     });
//   })

//   res.status(200).send(users)
// })

// app.delete("/track", (req:Request, res:Response) => {
//   const trackId = req.query.trackId
//   const playlistId = req.query.playlistId

//   const allPlaylists = users
//     .map((user: any) => {
//       return user.playlists;
//     })
//     .flat(1);
//   for (let i = 0; i <= allPlaylists.lenght; i++) {
//     allPlaylists[i]
//   }

//   for (let playlist of allPlaylists) {
//     playlist
//   }

//   allPlaylists.forEach((playlist: any) => {
//     if (playlist.id === playlistId) {
//        playlist.tracks = playlist.tracks.map((track: any) => {
//          if (track.id === trackId) {
//            return {};
//          }
//          return track;
//        });
//     }
//   })

//   res.status(200).send(allPlaylists)
// })

// // 1.b Create a new playlist

// app.post("/playlists",(req:Request,res:Response)=>{
//   const playlistName = req.body.name
//   const userIdToAdd = req.headers.authorization
  
//   for (let i =0; i < users.length; i++){
//     if(users[i].id === userIdToAdd){
//       users[i].playlists.push({
//         id:Date.now(),
//         name:playlistName,
//         tracks: [],
//       })
//     }
//   }
//  res.send({users})
// })

// // 1c. Create a new track - Criar uma nova faixa

// app.post("/playlists/:playlistId/tracks",(req :Request, res:Response) => {
//    const playlistIdToAdd = req.params.playlistId
//    const userIdToAdd  = req.headers.authorization
//    const{name, artist, url} = req.body

//    for(let i= 0; i < users.length; i++){
//     // iterar os usuários para achar com id especifico
//     if(users[i].id === userIdToAdd){
//      for(let j= 0; j < users[i].playlists.length; j++){
//       if(users[i].playlists[j].id === playlistIdToAdd){
//         users[i].playlists[j].tracks.push({
//           id:Date.now().toString,
//           name:name,
//           artist:artist,
//           url:url,
//         })
//       }
//     }
//    }
//    res.send({playlistIdToAdd,url,name,artist})
  
// }})


// // -------------- EXPLICAÇÃO DE ORDENAÇÃO NO EXPRESS-----

// // Batemos no endpoint => http://localhost:3003/test/hello 

// //hello = string e o app espera um numero por isso NaN

// // Regra de Organização do express => Se vc têm um caminho na 
// //url muito igual ao outro e com os mesmos métodos, tome cuidado
// // sempre coloque os enpoint fixos antes do que contém os path parameters 
// // ou query parameters . Separe também por métodos 
  

//   app.get('/test/hello', (req: Request, res: Response) => {
//     res.send(`Olá, mundo!`)
//     }) 

//   app.get('/test/:number', (req: Request, res: Response) => {
//       res.send(
//       `Seu número da sorte é ${Number(req.params.number) + 3}!
//       `)
//   })

  

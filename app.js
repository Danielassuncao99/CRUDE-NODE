const express = require('express') // 
const app = express()
const port = 3000
app.use(express.json());

let bd = [
    {
        id:"1",
        name: "Daniel"
    },
    {
        id: "2",
        name: "Bruna"  
    }
]


// Get users
app.get('/users', (request, response) => {
  response.json(bd);
})

app.get("/users/:id", (request,response) => {

  //pegar o id da requisição
  const idUser = request.params.id;  

  // encontrar o usuario correspondente do  bd
    const user = bd.filter((usuario) => usuario.id === idUser);

  // responder a requisição com as indormações do users
    response.json(user);
})

app.post("/users",(request,response) =>{

  

  //pegar o corpo da requisição
  const body = request.body;



  // criar um novo obsjto a partir desse corpo
  const newUser = {
    id:(bd.length+1).toString(),
    name: body.name
  }

  // adcionar esse novo objeto no banco
  bd.push(newUser);

  // responder a requisição com o banco completo
  response.json(bd);



})

app.delete("/users/:id",(request,response)=>{
  // pegar o id da requisição
  const idUser = request.params.id;

  //percorrer o banco e encontrar qyem tem o id da requisição
  bd = bd.filter((usuario) => usuario.id != idUser);
  // deletar 

  // responder com meu banco atualizado
  response.json(bd);
})

app.patch("/users/:id",(request,response)=>{
  // pegar o id da requisição
    const idUser = request.params.id;

  // pegar o corpo da requisição
  const body = request.body;

  // percorrer o banco
  bd = bd.map((usuario) => {
    if(usuario.id === idUser){
      // atualizar as informações
      usuario.name = body.name;
    }
    return usuario 
  })

  

  //responder  a requisição com banco
  response.json(bd);

} )







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')// é usado para importa framework em um projeto.
const userService = require('./services/users')
const app = express()//é usado para criar uma instância do aplicativo express, permite que você configure e manipulerota.
const port = 3000//é uma linha de código que define uma chamada contante "port" com o valor 3000.
app.use(express.json())//é usado para adicionar o middleware.


//get users
app.get('/users', (request, response) => {
  response.json(userService.getUsers())
})

app.get('/users/:id', (request, response) => {
  //pegar o id da requisição
  const idUser = request.params.id;
  response.json (userService.getUserById(idUser))
  // responder a requisição com as informações do users

})

app.post("/users",(request, response) => {

//pegar o id requisição
const body =  request.body;
response.status(201).json(userService.creatUser(body));

//criar um novo pbjeto a partir desse corpo
//responder a requisição com o banco completo


})

app.delete("/users/:id",(request, response) =>{

  //pegar o id da requisição
  const idUser = request.params.id;

  // pecorrer o banco e encontrar quem tem o id da requisição
  userService.deleteUser(idUser);

  //respoder com meu banco atulizado
  response.json("Apagado com sucesso!!!!!!!! Boa.");
})

app.patch("/users/:id",(request, response)=>{
  // pagar o id da requição 
  const idUser = request.params.id;

  //pagar o corpo da requição 
  const body = request.body;

  //percorrer o banco
  userService.updateUser(idUser, body);

  //responder a equisição com banco
  response.status(200).json("Atualizado com sucesso e fé");

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
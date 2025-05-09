// MÉTODOS HTTP: (post) create, get (read), put (update), delete (delete)
// CRUD: Create, Read, Update, Delete (Back End)


const express = require('express')
const app = express();
const port = 3000;

// Portas padrões: HTML: 5500
// http://localhost:3001/
let usuarios = [];

// cria a rota para poder solicitá - la
app.get('/usuarios', (req, res)=>{
  res.send('servidor ativo')
});

app.post('/usuarios', (req,res)=>{
  const novoUsuario = req.body;
  console.log("Usuário recebido", novoUsuario);
  usuarios.push(novoUsuario);
  res.status(201).json({mensagem: 'usuário criado com sucesso'});
});
// app.put()
// app.delete()

app.listen(port, ()=>{
  console.log('servidor rodando na porta 3000')
})


const porta = 3003

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

let usuarios = [
    {
        id: 1,
        nome: 'eliseu',
        email: 'eliseu@gmail.com'
    },
    {
        id: 2,
        nome: 'bryant',
        email: 'bryant@gmail.com'
    }
]

//listar usuarios
app.get('/usuarios', (req,res,next) => 
{
    res.json(usuarios)
})

//mostrar usuarios id
app.get('/usuarios/:id', (req,res,next) => 
{
    const { id } = req.params
    let editar = usuarios.find(usuarios => usuarios.id == id)
    if(!editar){
        res.status(404).json({erro: 'Usuário não encontrado'})
        return
    }
    res.json(editar)
})

// criar usuarios
app.post('/usuarios', (req,res,next) => 
{
    let id = req.body.id
    let nome = req.body.nome
    let email = req.body.email 
    let novoUsuario = {
        id,
        nome,
        email
    }

    usuarios.push(novoUsuario)
    res.json(novoUsuario)
})


//atualizar
app.put('/usuarios/:id', (req,res,next) => 
{
    const { id } = req.params
    let nome = req.body.nome
    let email = req.body.email
    let atualizar = usuarios.findIndex(usuarios => usuarios.id == id)
    if(atualizar === -1){
        res.status(404).json({erro: 'Usuário não encontrado'})
        return
    }
    if (nome) {
        usuarios[atualizar].nome = nome
    }
    if (email) {
        usuarios[atualizar].email = email
    }

    res.json(usuarios[atualizar])
})

//deletar usuarios
app.delete('/usuarios/:id', (req,res,next) => 
{
    const { id } = req.params
    let deletar = usuarios.filter(usuarios => usuarios.id != id)
    res.json(deletar)
})


app.listen(porta, () => 
{
    console.log(`Servidor executando na porta ${porta}.`)
})
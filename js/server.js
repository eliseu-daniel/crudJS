const porta = 3003

const express = require('express')
const app = express()

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

//mostrar usuarios
app.get('/usuarios', (req,res,next) => 
{
    res.json(usuarios)
})

//editar usuarios
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

app.listen(porta, () => 
{
    console.log(`Servidor executando na porta ${porta}.`)
})
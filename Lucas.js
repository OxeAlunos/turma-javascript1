import express from 'express'

const app = express()
app.use(express.json())

let livros = []

app.get('/', (req, res) => {
    res.status(200).json({nome: 'Lucas', idade: 25})
})

app.get('/livro', (req, res) => {
    res.status(200).json(['Código da Vinci', 'O senhor dos Anéis'])
})

app.listen(3301, () => {
    console.log('O servidor está rodando com sucesso.')
})
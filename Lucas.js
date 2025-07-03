import express from 'express'

const app = express()
app.use(express.json())

let livros = []

app.get('/', (req, res) => {
    res.status(200).json({nome: 'Lucas', idade: 25})
})

app.post('/livros', (req, res) => {
    const livro = req.body
    livros.push(livro)
    res.status(200).send('Envio bem-sucedido.')
})

app.put('/livro', (req, res) => {
    const livroPassado = req.body
    for(let livro of livros) {
        if(livro.nome == livroPassado.nome) {
            livro.autor = livroPassado.autor
            livro.ano = livroPassado.ano
        }
    }
    res.status(200).send('Livro atualizado.')
})

app.delete('/livro', (req, res) => {
    const livroPassado = req.body
    livros = livros.filter((livro) => {
        if(livro.nome == livroPassado.nome) {
            return false
        }
        return true
    })
    res.status(200).send('Livro removido.')
})

app.get('/livros', (req, res) => {
    res.status(200).json([livros])
})

app.listen(3301, () => {
    console.log('O servidor está rodando com sucesso.')
})
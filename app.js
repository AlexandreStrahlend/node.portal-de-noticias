const app = require('express')()

app.set('view engine', 'ejs')



app.get('/', (req, res) => {

    res.send('<html><body>Portal de notícias</body></HTML>')

})

app.get('/tecnologia', (req, res) => {

    res.send('<html><body>Noticias de Tecnologia</body></HTML>')

})

app.get('/beleza', (req, res) => {

    res.send('<html><body>Noticias de Beleza</body></HTML>')

})

app.get('/moda', (req, res) => {

    res.send('<html><body>Noticias de Moda</body></HTML>')

})


app.listen(3000, () => {

    console.log('Servidor rodando com Express')

})

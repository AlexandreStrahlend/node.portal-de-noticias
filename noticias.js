const http = require('http')

const server = http.createServer((req, res) => {

    const categoria = req.url

    if(categoria == '/tecnologia') {

        res.end('<html><body>Noticias de tecnologia</body></HTML>')

    } else if(categoria == '/moda') {

        res.end('<html><body>Noticias de moda</body></HTML>')

    } else if(categoria == '/beleza') {

        res.end('<html><body>Noticias de Beleza</body></HTML>')

    } else {

        res.end('<html><body>Portal de notícias</body></HTML>')

    }

})

server.listen(3000)
const app = require('./config/server.js')

//const rotaNoticias = require('./app/routes/noticias')(app)

//const rotaHome = require('./app/routes/home')(app)

//const rotaFormularioInclusaoNoticia = require('./app/routes/formulario_incluisao_noticia')(app)

app.listen(3000, () => {

    console.log('Servidor rodando com Express')

})


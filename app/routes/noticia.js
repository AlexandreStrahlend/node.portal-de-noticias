module.exports = (app) => {


	app.get('/noticia', (req, res) => {
    
		const connection = app.config.dbConnection()
		const noticiasModel = app.app.models.noticiasModel

		noticiasModel.getNoticia(connection, (err, result) => {
    
			res.render('noticias/noticia', {noticia : result})
    
		})
    
	})

}

const mysql = require('mysql')

const connMySQL = () => {

	console.log('Conexão com DB foi estabelecida')

	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'Lex1234567891',
		database: 'portal_noticias'
	})

}

module.exports = () => {
	console.log('O autoload carregou o modulo de conexão com DB')
	return connMySQL

}

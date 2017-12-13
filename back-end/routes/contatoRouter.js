var express = require('express');
var router = express.Router();
var contatoController = require('../controllers/contatoController');
var usuarioController = require('../controllers/usuarioController');

var formidable = require('formidable'),
	util = require('util'),
	fs = require('fs');

function pegarToken(req, res, next) {
	var header = req.headers['authorization'];

	if (typeof header !== 'undefined') {
		req.token = header;
		next();
	} else {
		res.sendStatus(403);
	}
}

router.get('/', pegarToken, function (req, res) {

	var token = req.token;
	contatoController.authorize(token, function (resp) {
		if (resp === true) {
			contatoController.list(function (resp) {
				res.json(resp);
			});
		} else {
			res.sendStatus(403);
		}
	})
});

router.get('/contatos', function (req, res) {
	contatoController.list(function (contatos) {
		res.json(contatos);
	});
})

router.post('/cadastrar', function (req, res) {
	//var form = new formidable.IncomingForm();
	//form.parse(req, function (err, fields, files) {
		//var img = files.foto;

		var autenticacao = req.body.autenticacao;
		var foto = req.body.foto;
		var nome = req.body.nome;
		var endereco = req.body.endereco;
		var email = req.body.email;
		var telefone = req.body.telefone;

		/*var autenticacao = fields.autenticacao;
		var nome = fields.nome;
		var endereco = fields.endereco;
		var email = fields.email;
		var telefone = fields.telefone;*/

		//var contat = new Contato({ foto: foto, nome: nome, endereco: endereco, email: email, telefone: telefone, autenticacao: autenticacao });
		//fs.readFile(img.path, function (err, foto) {
			contatoController.save(autenticacao, foto, nome, endereco, email, telefone, function (resp) {
				res.json(resp);
			});
		});
	//});
//});

router.delete('/deletar/:id', function (req, res) {
	var id = req.params.id;

	contatoController.delete(id, function (resp) {
		res.json(resp);
	});
})

router.get('/verificalogin/:id', function (req, res) {
	var id = req.params.id;

	contatoController.verificaLogin(id, function (contato) {
		res.json(contato);
	});
})

module.exports = router;
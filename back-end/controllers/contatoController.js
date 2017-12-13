var Contato = require('../models/Contato');	

exports.save = function (autenticacao, foto, nome, endereco, email, telefone, callback) {
	new Contato({
		'autenticacao': autenticacao,
		'foto': foto,
		'nome': nome,
		'endereco': endereco,
		'email': email,
		'telefone': telefone


	}).save(function (error, contato) {
		if (error) {
			callback({ error: 'Não foi possivel salvar' })
		} else {
			callback(contato);
		}
	});
}

exports.list = function (callback) {
	Contato.find({}, function (error, contatos) {
		if (error) {
			callback({ error: 'Não foi possivel encontrar os contatos' });
		} else {
			callback(contatos);
		}
	});
}

exports.verificaLogin = function (id, callback) {
	Contato.findOne({ '_id': id }, function (erro, contato) {
		if (erro) {
			callback({ erro: 'Voçe não tem permissão de acesso' });
		} else {
			callback(contato);
		}
	})
}

exports.delete = function (id, callback) {
	Contato.findById(id, function (error, contato) {
		if (error) {
			callback({ error: 'Não foi possivel excluir' });
		} else {
			contato.remove(function (error) {
				if (!error) {
					callback({ resposta: "Contato excluido com sucesso" });
				}
			});
		}
	})
}


var Produto = require('../models/Produto');	

exports.save = function (codigo, descricao, ean, valor, callback) {
	new Produto({
		'codigo': codigo,
		'descricao': descricao,
		'ean': ean,
		'valor': valor

	}).save(function (error, produto) {
		if (error) {
			callback({ error: 'Não foi possivel salvar Produto' })
		} else {
			callback(produto);
		}
	});
}

exports.list = function (callback) {
	Produto.find({}, function (error, produtos) {
		if (error) {
			callback({ error: 'Não foi possivel encontrar os Produtos' });
		} else {
			callback(produtos);
		}
	});
}

exports.delete = function (id, callback) {
	Produto.findById(id, function (error, produto) {
		if (error) {
			callback({ error: 'Não foi possivel excluir' });
		} else {
			produto.remove(function (error) {
				if (!error) {
					callback({ resposta: "Produto excluido com sucesso" });
				}
			});
		}
	})
}


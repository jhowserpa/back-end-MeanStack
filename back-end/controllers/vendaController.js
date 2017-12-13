var Venda = require('../models/Venda');	

exports.save = function (codigo, nome, data, totalVenda, produtos, callback) {
	new Venda({
		'codigo': codigo,
		'nome': nome,
		'data': data,
		'totalVenda': totalVenda,
		'produtos': produtos

	}).save(function (error, venda) {
		if (error) {
			callback({ error: 'Não foi possivel salvar a venda' })
		} else {
			callback(venda);
		}
	});
}

exports.update = function (upd, {}, callback) {
	Venda.update(upd, {}, function (error, venda) {
		if (error) {
			callback({ error: 'Não foi possivel excluir' });
		} else {
			callback(venda);
		}
	})
}

exports.list = function (callback) {
	Venda.find({}, function (error, vendas) {
		if (error) {
			callback({ error: 'Não foi possivel encontrar as vendas' });
		} else {
			callback(vendas);
		}
	});
}

exports.delete = function (id, callback) {
	Venda.findById(id, function (error, venda) {
		if (error) {
			callback({ error: 'Não foi possivel excluir' });
		} else {
			venda.remove(function (error) {
				if (!error) {
					callback({ resposta: "Venda excluido com sucesso" });
				}
			});
		}
	})
}

exports.findByIdProduto = function (id, callback) {
	Venda.findById(id, function (error, produto) {
		if (error) {
			callback({ error: 'Não foi possivel pesquisar Produto by id' });
		} else {
			callback(produto);
		}
	})
}


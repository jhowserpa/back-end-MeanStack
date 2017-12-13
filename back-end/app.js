var app = require('./config/app_config');
var db  = require('./config/db_config');
var User = require('./models/Contato');
var contatoController = require('./controllers/contatoController');
var contatos = require('./routes/contatoRouter');
var usuario = require('./routes/usuarioRouter');
var venda = require('./routes/vendaRouter');
var produto = require('./routes/produtoRouter');
var upload = require('./routes/uploadRouter');


app.get('/',function(req,res){
	res.end('Bem-vindo a API de contatos Utilizando MEAN STACK')
});

//rotas de contatos
app.use('/contatos',contatos);
app.use('/usuarios',usuario);
app.use('/venda',venda);
app.use('/produto',produto);
app.use('/upload',upload);





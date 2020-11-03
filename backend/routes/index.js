var express = require('express');
var App = express.Router();
var Funcionario = getmodule('api/funcionario');
var Projeto = getmodule('api/projeto');

/* GET home page. */
App.get('/funcionarios', function (req, res) {
  req.getConnection(function (err, connection) {
    if (err) return res.status(400).json();
    connection.query('SELECT * FROM funcionario', [], function (err, result) {
      if (err) return res.status(400).json();
      console.log('Conexão ao MYSQL realizada');
      return res.status(200).json(result);
    });
  });
});

App.route('/projeto')
  .get(Projeto.list)
  .post(Projeto.create);
  

App.route('/projeto/:id')
  .get(Projeto.getById)
  .put(Projeto.update)
  .delete(Projeto.delete)

App.route('/funcionario')
  .get(Funcionario.list)
  .post(Funcionario.create);

App.route('/funcionario/:id')
  .get(Funcionario.getById)
  .put(Funcionario.update)
  .delete(Funcionario.delete)

module.exports = App;

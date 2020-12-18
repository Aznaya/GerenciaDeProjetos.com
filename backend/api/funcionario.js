exports.list = function (req, res) {
    console.log(`Listando: `)
    req.getConnection(function (err, connection) {
        if (err) return res.status(400).json();
        connection.query(
            'SELECT funcionario.registro, funcionario.nome_funcionario, projeto.nome_projeto, funcionario.codigo_projeto, funcionario.horas_semanais '+
            'FROM funcionario, projeto '+
            'WHERE projeto.codigo = funcionario.codigo_projeto or funcionario.codigo_projeto = 0;',
            [], function (err, result) {
            if (err) return res.status(400).json();

            return res.status(200).json(result);
        });
    });
}

exports.create = function (req, res) {
    var data = req.body;

    req.getConnection(function (err, connection) {
        if (err) return res.status(400).json();
        connection.query('INSERT INTO funcionario SET ?', [data], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
}

exports.getById = function (req, res) {
    var Registro = req.params.id;
    
    console.log('Registro para busca: ', Registro);

    req.getConnection(function (err, connection) {
        if (err) return res.status(400).json();
        connection.query('SELECT * FROM funcionario WHERE registro = ?', [Registro],
            function (err, result) {
                if (err) return res.status(400).json(err);

                return res.status(200).json(result[0]);
            });
    });
}

exports.update = function (req, res) {
    var data = req.body,
        Registro = req.params.id;

    req.getConnection(function (err, connection) {
        if (err) return res.status(400).json();
        connection.query('UPDATE funcionario SET nome_funcionario = ?, horas_semanais = ?, codigo_projeto = ? WHERE registro = ? ',
         [data.nome_funcionario, data.horas_semanais, data.codigo_projeto, Registro],
            function (err, result) {
                if (err) return res.status(400).json(err);

                return res.status(200).json(result);
            });
    });
}

exports.delete = function (req, res) {
    var Registro = req.params.id;

    req.getConnection(function (err, connection) {
        if (err) return res.status(400).json();
        connection.query('DELETE FROM funcionario WHERE registro = ? ', [Registro], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
}
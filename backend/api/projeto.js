exports.list = function (req, res) {
    req.getConnection(function (err, connection) {
        if (err) return res.status(400).json();
        connection.query(
            'SELECT projeto.codigo, projeto.nome_projeto, funcionario.nome_funcionario, projeto.horas_estimadas '+
            'FROM projeto, funcionario '+
            'WHERE projeto.registro_funcionario = funcionario.registro;',
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
        connection.query('INSERT INTO projeto SET ?', [data], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
}

exports.getById = function (req, res) {
    var codigo = req.params.id;

    req.getConnection(function (err, connection) {
        if (err) return res.status(400).json();
        connection.query('SELECT * FROM projeto WHERE codigo = ?', [codigo],
            function (err, result) {
                if (err) return res.status(400).json(err);

                return res.status(200).json(result[0]);
            });
    });
}

exports.update = function (req, res) {
    var data = req.body,
        codigo = req.params.id;
    console.log('Atualizando: ', codigo)
    console.log(`data: ${data.nome_projeto}`)
    req.getConnection(function (err, connection) {
        if (err) return res.status(400).json();
        connection.query('UPDATE projeto SET nome_projeto = ?, registro_funcionario = ?, horas_estimadas = ? WHERE codigo = ? ',
         [data.nome_projeto, data.registro_funcionario, data.horas_estimadas, codigo],
            function (err, result) {
                if (err) return res.status(400).json(err);

                return res.status(200).json(result);
            });
    });
}

exports.delete = function (req, res) {
    var codigo = req.params.id;

    req.getConnection(function (err, connection) {
        if (err) return res.status(400).json();
        connection.query('DELETE FROM projeto WHERE codigo = ? ', [codigo], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
}
const mysql = require('mysql');

module.exports = executeQuery = (sqlQuery, res) => {
    if (sqlQuery) {
        const connection = mysql.createConnection({ // your database configs.
            hostname: '',
            user: '',
            port: '',
            password: '',
            database: ''
        });

        connection.query(sqlQuery, function (error, results, fields) {
            if (error)
                res.json(error);
            else
                res.json(results);
            connection.end();
            console.info('[QUERY] - Executed query:', sqlQuery);
        });
    }
}
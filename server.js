const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const executeQuery = require('./js/databaseConnection');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('pages/start');
});

app.get('/pointing', function (req, res) {
	res.render('pages/pointing');
});

const router = express.Router();

router.get('/pointing/:name?', (req, res) => {
	const {params} = req;
	let filter = '';
	if (params.name) {
		filter = ` WHERE name = '${params.name}' `;
	}
	executeQuery('SELECT * FROM task ' + filter, res);
})

router.post('/pointing', (req, res) => {
	const {body} = req;

	const id = Number.isNaN(body.id) ? null : parseInt(body.id);
	const name = body.name.substring(0, 255);
	const description = body.description.substring(0, 255);
	const task_name = body.task_name.substring(0, 255);
	const status = body.status.substring(0, 80);

	let query = `INSERT INTO task(id, name, description, task_name, status) VALUES(${id}, '${name}','${description}', '${task_name}', '${status}')`;
	if (id) {
		query = `UPDATE task set id = ${id}, name = '${name}', description = '${description}', task_name = '${task_name}', status = '${status}' WHERE id = '${id}'`
	}

	executeQuery(query, res);
});

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use('/', router);


const port = 9094;
app.listen(port);
console.info('pointingv2 Started on port ', port);
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch', 
	completed: false,
}, {
	id: 2,
	description: 'Go to the market', 
	completed: false,
}, {
	id: 3,
	description: 'Feed the cat', 
	completed: true,
}];

app.get('/', function(req, res) {
	res.send("Todo API Root");
});
 
 // GET /todos
app.get('/todos', function(req, res) {
	res.json(todos);
});

 // GET /todos/:id
app.get('/todos/:id', function(req, res) {
	var todoId = parseInt(req.params.id, 10);
	var mathedTodo;

	todos.forEach(function(todo) {
		if (todo.id === todoId) {
			mathedTodo = todo;
		}
	});
	if (mathedTodo) {
		res.json(mathedTodo);	
	} else {
		res.status(404).send();
	}	
});

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});
const restify = require('restify');
const app = restify.createServer();
const taskService = require('./taskService');

app.use(restify.plugins.bodyParser());

app.get('/tasks', (req, res, next) => {
    res.send(taskService.getAll());
    next();
});

app.get('/tasks/:id', (req, res, next) => {
    let taskId = parseInt(req.params.id);
    try{
        res.send(taskService.get(taskId))
    } catch (err){
        res.send(404);
    }
});

app.post('/tasks', (req, res, next) => {
    const newTask = taskService.addNew(req.body);
    res.send(201, newTask);
    res.end();
    next();
});

app.listen(8085);
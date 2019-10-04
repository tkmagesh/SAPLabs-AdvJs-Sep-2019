const restify = require('restify');
const app = restify.createServer();
const taskService = require('./taskService');

app.use(restify.plugins.bodyParser());
//Async using callbacks
/*
app.get('/tasks', (req, res, next) => {
    taskService.getAll(function(err, taskList){
        res.send(taskList);
    });
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
*/

//Async using Promises
/*
app.get('/tasks', (req, res, next) => {
    taskService
        .getAll()
        .then(function(taskList){
            res.send(taskList);
        });
});

app.get('/tasks/:id', (req, res, next) => {
    let taskId = parseInt(req.params.id);
    taskService
        .get(taskId)
        .then(function(task){
            res.send(task);
        })
        .catch(function(err){
            res.send(404);
        })
});

app.post('/tasks', (req, res, next) => {
    taskService
        .addNew(req.body)
        .then(function(newTask){
            res.send(201, newTask);
        });
});
*/

//Async using 'async await'
app.get('/tasks', async (req, res, next) => {
    const taskList = await taskService.getAll();
    res.send(taskList);
});

app.get('/tasks/:id', async (req, res, next) => {
    try{
        let taskId = parseInt(req.params.id);
        const task = await taskService.get(taskId);
        res.send(task);
    } catch(err){
        res.send(404);
    }
});

app.post('/tasks', async (req, res, next) => {
    const newTask = await taskService.addNew(req.body);
    res.send(201, newTask);
});

app.listen(8085);
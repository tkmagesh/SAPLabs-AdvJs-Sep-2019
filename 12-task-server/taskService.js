const taskDb = require('./taskDb');
/* 
module.exports = {
    getAll(callback){
        //return [...taskDb.getData()];
        taskDb.getData(function(err, taskList){
            callback(err, taskList);
        })
    },
    get(id){
        const taskList = taskDb.getData();
        let task = taskList.find(task => task.id === id);
        if (task){
            return task;
        } else {
            throw new Error('Not found');
        }   
    },
    addNew(newTaskData){
        const taskList = taskDb.getData();
        newTaskId = taskList.reduce((result, task) => result > task.id ? result : task.id, 0) + 1,
        newTask = { ...newTaskData, id : newTaskId};
        taskList.push(newTask); 
        taskDb.saveData(taskList);
        return newTask; 
    }
    */
   module.exports = {
    getAll(callback){
        //return [...taskDb.getData()];
        // taskDb.getData(function(err, taskList){
        //     callback(err, taskList);
        // })
        return taskDb.getData();
    },
    async get(id){
        const taskList = await taskDb.getData();
        let task = taskList.find(task => task.id === id);
        if (task){
            return task;
        } else {
            throw new Error('Not found');
        }
    },
    async addNew(newTaskData){
        const taskList = await taskDb.getData()
        const newTaskId = taskList.reduce((result, task) => result > task.id ? result : task.id, 0) + 1,
            newTask = { ...newTaskData, id : newTaskId};
        taskList.push(newTask); 
        await taskDb.saveData(taskList);
        return newTask;        
    }
}
const taskDb = require('./taskDb');
  
module.exports = {
    getAll(){
        return [...taskDb.getData()];
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
}
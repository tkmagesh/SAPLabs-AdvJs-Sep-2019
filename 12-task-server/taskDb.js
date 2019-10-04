const fs = require('fs'),
    dbFile = require('path').join(__dirname,'data/db.json');
/*
module.exports = {
    getData(callback){
        fs.readFile(dbFile, {encoding : 'utf8'}, function(err, rawData){
            if (err) return callback(erro);
            return callback(null, JSON.parse(rawData));
        });
        
    },
    saveData(taskList, callback){
        fs.writeFile(dbFile, JSON.stringify(taskList), {encoding : 'utf8'}, callback);
    }
};
*/

module.exports = {
    getData(){
        return new Promise(function (resolveFn, rejectFn){
            fs.readFile(dbFile, {encoding : 'utf8'}, function(err, rawData){
                if (err) return rejectFn(err);
                return resolveFn(JSON.parse(rawData));
            });
        });
        
        
    },
    saveData(taskList){
        return new Promise(function(resolveFn, rejectFn){
            fs.writeFile(dbFile, JSON.stringify(taskList), {encoding : 'utf8'}, function(err){
                if (err) return rejectFn(err);
                return resolveFn();
            });
        });
    }
};
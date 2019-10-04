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

//constructing Promises from callbacks 
/*
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
*/

//Using util.promisify
/*
const util = require('util'),
    readFileAsync = util.promisify(fs.readFile),
    writeFileAsync = util.promisify(fs.writeFile);

module.exports = {
    async getData(){
        const rawData = await readFileAsync(dbFile, { encoding : 'utf8'});
        return JSON.parse(rawData);
        
    },
    async saveData(taskList){
        return await writeFileAsync(dbFile, JSON.stringify(taskList));
    }
};
*/

var bluebird = require('bluebird');
bluebird.promisifyAll(fs);

module.exports = {
    async getData(){
        const rawData = await fs.readFileAsync(dbFile, { encoding : 'utf8'});
        return JSON.parse(rawData);
        
    },
    async saveData(taskList){
        return await fs.writeFileAsync(dbFile, JSON.stringify(taskList));
    }
};
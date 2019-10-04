const fs = require('fs'),
    dbFile = require('path').join(__dirname,'data/db.json');

module.exports = {
    getData(){
        const rawData = fs.readFileSync(dbFile, {encoding : 'utf8'});
        return JSON.parse(rawData);
    },
    saveData(taskList){
        fs.writeFileSync(dbFile, JSON.stringify(taskList), {encoding : 'utf8'});
    }
};
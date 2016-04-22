var fs = require('fs');
var colors = require('colors');
var path = require('path');

//only read js files
function scriptFilter(name){
    return (/(\.(js)$)/i).test(path.extname(name));
}

var tasks = fs.readdirSync('./gulp/tasks')
    .filter(scriptFilter);

tasks.forEach(function(task){
    require('./tasks/' + task);
});
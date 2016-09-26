var $ = require('gulp-load-plugins')({
    camelize: true
});

var Notifier = require('node-notifier');
var config = require('../config.js');

module.exports = function(error) {
    // Handles errors during tasks by logging them and displaying a notification.
    console.log( ('ERROR: ' + error.name + (error.plugin !== undefined ? ' in ' + error.plugin : ' ') + ': ' + error.message).red );

    Notifier.notify({
        title: config.projectName,
        message: error.name + (error.plugin !== undefined ? ' in ' + error.plugin : '') + ': ' + error.message
    });
};

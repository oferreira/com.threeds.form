var args = require('yargs').argv;

/**
 * A utility that help for build the code
 *
 * @namespace Gulp.Helpers
 * @class BuildHelper
 * @constructor
 */
module.exports = {
    /**
     * check if is an release
     *
     * @method isRelease
     * @public
     * @return {boolean}
     * @example
     *  var buildHelper = require('../helpers/build-helper');
     *
     *  if (buildHelper.isRelease()) {
     *      // ...
     *  }
     */
    is: function(name) {
        if (typeof args.env != "undefined" && args.env == "prod") {
            return true;
        } else {
            console.log('error : ', '--env in not defined or is invalid')
        }
        return false;
    },
};

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
    isRelease: function() {
        return ( args.release ) ? true : false;
    },
};

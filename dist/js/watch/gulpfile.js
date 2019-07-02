"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let gulp = require('gulp');
const loglevel = require("loglevel");
const log = loglevel.getLogger('gulpfile');
log.setLevel((process.env.DEBUG_LEVEL || 'warn'));
const errorHandler = require('gulp-error-handle');
var rename = require('gulp-rename');
var tapCsv = require('gulp-etl-tap-csv').tapCsv;
const pkginfo = require('pkginfo')(module); // project package.json info into module.exports
const PLUGIN_NAME = module.exports.name;
function watcher() {
    return gulp.watch('./testdata/**/*', { ignoreInitial: false });
}
function tapFunction(callback) {
    log.info('gulp starting for ' + PLUGIN_NAME);
    return gulp.src('testdata/watch/*.csv')
        .pipe(errorHandler(function (err) {
        log.error('whoops: ' + err);
        callback(err);
    }))
        .pipe(tapCsv({ columns: true }))
        .pipe(rename({ extname: ".ndjson" })) // rename to *.ndjson
        .pipe(gulp.dest('../../testdata/watch/processed'));
}
exports.default = gulp.series(watcher, tapFunction);
//# sourceMappingURL=gulpfile.js.map
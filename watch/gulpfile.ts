let gulp = require('gulp')
const errorHandler = require('gulp-error-handle')
var rename = require('gulp-rename')
import Vinyl = require('vinyl')
var tapCsv = require('gulp-etl-tap-csv').tapCsv
const pkginfo = require('pkginfo')(module); // project package.json info into module.exports
const PLUGIN_NAME = module.exports.name;
import * as loglevel from 'loglevel'
const log = loglevel.getLogger('gulpfile')
log.setLevel((process.env.DEBUG_LEVEL || 'warn') as log.LogLevelDesc)

function tapFunction(callback: any) {
    log.info('gulp task starting for ' + PLUGIN_NAME)

    return gulp.src('testdata/*.csv')
        .pipe(errorHandler(function (err: any) {
            log.error('Error: ' + err)
            callback(err)
        }))
        .on('data', function (file: Vinyl) {
            log.info('Starting processing on ' + file.basename)
        })
        .pipe(tapCsv({
            raw: true /*, info:true */
        }))
        .pipe(rename({
            extname: ".ndjson",
        }))
        .pipe(gulp.dest('./testdata/processed'))
        .on('data', function (file: Vinyl) {
            log.info('Finished processing on ' + file.basename)
        })
        .on('end', function () {
            log.info('gulp task complete')
            callback()
        })
}

function watch(callback: any) {
    gulp.watch('testdata/*.csv', {
        ignoreInitial: false
    }, tapFunction)
    callback()
}

exports.default = gulp.series(tapFunction, watch)
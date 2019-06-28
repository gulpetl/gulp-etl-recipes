let gulp = require('gulp')
var rename = require('gulp-rename')
var tapCsv = require('gulp-etl-tap-csv').tapCsv
const pkginfo = require('pkginfo')(module); // project package.json info into module.exports
const PLUGIN_NAME = module.exports.name;
var loglevel = require('loglevel')
const log = loglevel.getLogger('gulpfile')
log.setLevel((process.env.DEBUG_LEVEL || 'warn'))
const errorHandler = require('gulp-error-handle')

function tapFunction(callback) {
    log.info('gulp task starting for ' + PLUGIN_NAME)

    return gulp.src('testdata/*.csv')
        .pipe(errorHandler(function (err) {
            log.error('Error: ' + err)
            callback(err)
        }))
        .on('data', function (file) {
            log.info('Starting processing on ' + file.basename)
        })
        .pipe(tapCsv({
            raw: true /*, info:true */
        }))
        .pipe(rename({
            extname: ".ndjson",
        }))
        .pipe(gulp.dest('./testdata/processed'))
        .on('data', function (file) {
            log.info('Finished processing on ' + file.basename)
        })
        .on('end', function () {
            log.info('gulp task complete')
            callback()
        })
}

function watch() {
    gulp.watch('testdata/*.csv', {
        ignoreInitial: false
    }, tapFunction)
}

exports.default = gulp.series(watch)
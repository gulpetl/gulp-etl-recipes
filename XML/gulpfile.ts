let gulp = require('gulp')
import * as loglevel from 'loglevel'
const log = loglevel.getLogger('gulpfile')
log.setLevel((process.env.DEBUG_LEVEL || 'warn') as loglevel.LogLevelDesc)
var xml2json = require('gulp-xml2json');
import * as rename from 'gulp-rename'
const errorHandler = require('gulp-error-handle'); // handle all errors in one handler, but still stop the stream if there are errors

const pkginfo = require('pkginfo')(module); // project package.json info into module.exports
const PLUGIN_NAME = module.exports.name;

function demonstrateXML(callback: any) {
  log.info('gulp starting for ' + PLUGIN_NAME)
  return gulp.src('./testdata/*.xml', {
      buffer: true
    })
    .pipe(errorHandler(function (err: any) {
      log.error('whoops: ' + err)
      callback(err)
    }))
    .pipe(xml2json())
    .pipe(rename({
      extname: '.json'
    }))
    .pipe(gulp.dest('./testdata/Processed'))
    // .pipe(vinylPaths((path) => {
    //   // experimenting with deleting files, per https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md.
    //   // This actually deletes the NEW files, not the originals! Try gulp-revert-path
    //   return del(path, {force:true})
    // }))
    .on('end', function () {
      log.info('end')
      callback()
    })
}

function test(callback: any) {
  log.info('This seems to run only after a successful run of demonstrateHandlelines! Do deletions here?')
  callback()
}

exports.default = gulp.series(demonstrateXML, test)
Users can create a JSON File from a XML file by using this parser in the gulp file
https://www.npmjs.com/package/gulp-x2j 

**Installation Process**

**npm**
To install the parser with npm, type ```npm install --save-dev gulp-xml2json``` in the terminal

##### Sample gulpfile.ts
Below is a sample gulp file
```
var gulp = require('gulp');
var xml2json = require('gulp-xml2json');
var rename = require('gulp-rename');
 
gulp.task('default', function () {
        log.info('gulp starting for ' + PLUGIN_NAME)
         return gulp.src('../../testdata/XML/*.xml',{buffer:true})
        .pipe(xml2json())
        .pipe(rename({extname: '.json'}))
        .pipe(gulp.dest('../../testdata/XML/Processed'))
});
```

**Options Parameter**
This plugin also allowes users to use options(optional) parameter to create node-xml2js parser.

##### Sample gulpfile.ts
```
var gulp = require('gulp');
var xml2json = require('gulp-xml2json');
var rename = require('gulp-rename');
/*
var jsonFormat = require('gulp-json-format');
var lineEnding = require('gulp-line-ending-corrector');
*/
 
gulp.task('default', function () {
          log.info('gulp starting for ' + PLUGIN_NAME)
         return gulp.src('../../testdata/XML/*.xml',{buffer:true})		
        .pipe(xml2json({            
            mergeAttrs: true,
            explicitArray: false
        }))
/*		
        // jsonFormat(n) -> n is the number of space characters to use as white space
        .pipe(jsonFormat(4))
        // eolc Desired End of Line character. can be CR (\r), LF(\n) (Default), CRLF(\r\n)
        .pipe(lineEnding({verbose: true, eolc: 'CRLF', encoding:'utf8'}))
*/
        .pipe(rename({extname: '.json'}))
        .pipe(gulp.dest('../../testdata/XML/Processed'))
});
```
**Options Documentation**
node-xml2js Options documentation can be found in the link below:
https://github.com/Leonidas-from-XIV/node-xml2js#options


**npm link**
https://www.npmjs.com/package/gulp-x2j

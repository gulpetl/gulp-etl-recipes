Users can create a JSON File from a CSV file by using this parser in the gulp file
https://www.npmjs.com/package/csv2json

**Installation Process**

**npm**
To install the parser globally type ```npm install --global csv2json``` in the terminal
To install the parser locally type ```npm install --save csv2json``` in the terminal

##### Sample gulpfile.ts
**For Buffer**
Below is a sample gulp file
```
var gulp = require('gulp');
var csv2json = require('csv2json');
var rename = require('gulp-rename');
 
gulp.task('default', function () {
        log.info('gulp starting for ' + PLUGIN_NAME)
      return gulp.src('../../testdata/csv/*.csv',{buffer:true})
      .pipe(errorHandler(function(err:any) {
        log.error('whoops: ' + err)
        callback(err)
      }))
      .pipe(csvtojson({ toArrayString: true }))
      .pipe(rename({extname: '.json'}))     
      .pipe(gulp.dest('../../testdata/csv/processed'))
});
```

**For Stream**
```
var csv2json = require('csv2json');
var fs = require('fs');
 
fs.createReadStream('*.csv')
  .pipe(csv2json({
    // Defaults to comma.
    separator: ';'
  }))
  .pipe(fs.createWriteStream('*.json'));
  ```

**Options Documentation**
node-xml2js Options documentation can be found in the link below:
https://github.com/Leonidas-from-XIV/node-xml2js#options


**npm link**
https://www.npmjs.com/package/gulp-x2j


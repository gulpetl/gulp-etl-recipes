/* TypeScript: Retrieve files from outside FTP server and store them to local folder. */

import { src, dest } from 'gulp'
const errorHandler = require('gulp-error-handle'); // handle all errors in one handler, but still stop the stream if there are errors

let gutil = require('gulp-util') //Needed to import plugin for vinyl
let ftp = require('vinyl-ftp') //Needed to import plugin for vinyl

//Vinyl Plugin variables
//Helper Function to build FTP Connection based on configuration
var conn = ftp.create({
    host: 'mywebsite.com',
    user: 'username',
    password: 'password',
    log: gutil.log,
    secure: true,
});

export function downloadFTP(callback: any) {
    try {
        return conn.src(['Tap/*'], {
                base: '/Tap/'
            }) //Read files from Tap folder in FTP Server; Base takes all the files inside folder
            .pipe(errorHandler(function (err: any) {
                console.error('oops: ' + err)
                callback(err)
            }))
            .on('data', function (file: any) {
                console.log('Done downloading ' + file.basename)
            })
            .pipe(dest('testdata/csv/')) //Sends files to local data folder
    } catch (err) {
        console.error(err)
    }
}


export function uploadFTP(callback: any) {
    try {
        return src(['testdata/csv/*.csv'], {
                base: 'testdata/csv/'
            }) //Grabs all files in local folder named "data"; Base takes all those files
            .pipe(errorHandler(function (err: any) {
                console.error('oops: ' + err)
                callback(err)
            }))
            .on('data', function (file: any) {
                console.log('Done uploading ' + file.basename)
            })
            .pipe(conn.newer('/Target/')) //Only upload newer files
            .pipe(conn.dest('/Target/')) //Sends data to server folder Target
    } catch (err) {
        console.error(err)
    }
}
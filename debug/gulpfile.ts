let gulp = require('gulp')

export function sample(callback: any){
    console.log('Hello to this recipes folder.')
    console.log('In order to test any of our recipes you will have to open the sub-folder as its own project')
    console.log('To add a recipe of your own, duplicate the sample folder')
}

exports.default = gulp.series(sample)
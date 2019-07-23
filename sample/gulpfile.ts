let gulp = require('gulp')

export function sample(callback: any){
    console.log('When adding a recipe there are a few things to remember: ')
    console.log('    Update the readme to contain a sample gulpfile as well as enough information to not lose any knowledge between users')
    console.log('    Rename launch profile on launch.json to have a relevant name')
    console.log('    Add any test files into the subproject and not into the main project')
}

exports.default = gulp.series(sample)
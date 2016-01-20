var gulp = require("gulp"),
    protractorQA = require('gulp-protractor-qa');
    gulp.task('protractor-qa', function() {
       protractorQA.init({
          runOnce: true, // optional
          testSrc: 'test/e2e/*.js',
          viewSrc: [ 'index.html', 'app/*.html' ]
       });
    });
    gulp.task('default', ['protractor-qa']);

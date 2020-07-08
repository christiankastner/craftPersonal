'use strict';

var gulp = require('gulp')
var sass = require('gulp-sass')

sass.compiler = require('node-sass');

var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var imagemin = require('gulp-imagemin')


gulp.task('sass', function() {
    return gulp.src("./src/sass/**/*.scss")
    .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./web/assets/css"))
})

gulp.task('sass:watch', function() {
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});


'use strict';

var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var imagemin = require('gulp-imagemin')
var rename = require('gulp-rename')
var babel = require('gulp-babel');

sass.compiler = require('node-sass');

var baseDir = "./src"
var targetDir = "./web/assets"
gulp.task('sass', function() {
    return gulp.src(baseDir + "/sass/**/main.scss")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(targetDir + "/css"))
})

gulp.task('sass:watch', function() {
    gulp.watch(baseDir + '/**/*.scss', gulp.series('sass'));
});

gulp.task('js', function() {
    return gulp.src(baseDir + "/js/**/*.js")
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('concat.js')) //this will concat all the files into concat.js
    .pipe(gulp.dest(baseDir + "/concat")) //this will save concat.js in a temp directory defined above
    .pipe(rename('index.js')) //this will rename concat.js to uglify.js
    .pipe(uglify()) //this will uglify/minify uglify.js
    .pipe(gulp.dest(targetDir + "/js"));
})

gulp.task('js:watch', function() {
    gulp.watch(baseDir + '/js/**/*.js', gulp.series('js'))
})

gulp.task('watch', function() {
    gulp.watch(baseDir + '/js/**/*.js', gulp.series('js'))
    gulp.watch(baseDir + '/**/*.scss', gulp.series('sass'));
    gulp.watch(baseDir + '/images/*', gulp.series('imagemin'))
})

gulp.task('imagemin', function() {
    return gulp.src(baseDir + '/images/*')
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest(targetDir + '/images'))
})

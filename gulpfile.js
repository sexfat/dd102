//引入套件
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync').create();
var sass =  require('gulp-sass');
var clean = require('gulp-clean');
var reload = browserSync.reload;

//搬家
gulp.task('concat', function () {
    //do sometime
    gulp.src('./dev/js/*.js').pipe(gulp.dest('dest/js'))
});


//清除 dest
gulp.task('clean', function () {
    return gulp.src(['dest/*'], {
            read: false
        })
        .pipe(clean());
});




// gulp.task('minicss', ['auto'], function () {
//     gulp.src('dest/css/*.css')
//         .pipe(cleanCSS({
//             compatibility: 'ie8'
//         }))
//         .pipe(gulp.dest('dest/css/'));
// });



// gulp.task('watch', function () {
//     gulp.watch('css/*.css', ['auto']);
//     gulp.watch(['*.html' , '**/*.html'], ['template']);
// });





//html template

gulp.task('template', function () {
    gulp.src(['dev/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dest'));
});

//sass
gulp.task('sass', function () {
    return gulp.src('./dev/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dest/css'));
  });

gulp.task('default', function () {
    browserSync.init({
        server: {
            //根目錄
            baseDir: "./",
            index: "./dest/index.html"
        }
    });

    // gulp.watch(["sass/*.scss", "sass/**/*.scss"], ['sass']).on('change', reload);
    gulp.watch(["dev/*.html" , "dev/**/*.html"] , ['template']).on('change', reload);
    gulp.watch("./dev/js/*.js" ,['concat'] ).on('change', reload);
    gulp.watch(["./dev/sass/*.scss","./dev/sass/**/*.scss"], ['sass']).on('change', reload);
    // gulp.watch("images/*").on('change', reload);
});
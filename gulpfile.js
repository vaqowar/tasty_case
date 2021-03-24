var gulp = require('gulp')
    , rename = require('gulp-rename')
    , sass = require('gulp-sass')
    , autoprefixer = require('gulp-autoprefixer')
    , cleanCss = require('gulp-clean-css')
    , pug = require('gulp-pug')
    , uglify = require('gulp-uglify')
    , imagemin = require('gulp-imagemin')
    , del = require('del')
    , browserSync = require('browser-sync').create();

gulp.task('scss2css', () => {
    return gulp.src('./app/scss/main.scss')
 
        .pipe(sass({
            errorLogToConsole: true
        }))
        .on('error', console.error.bind(console)) 
        .pipe(autoprefixer({
            browsers: ['last 100 versions'],
            cascade: false
        }))

        .pipe( gulp.dest('./app/css/') )
});

gulp.task('min_css', ()=> {
    return gulp.src('./app/css/**')
 
        // .pipe(rename({suffix: '.min'}))
        .pipe(cleanCss({compatibility: "ie8"}))
        .pipe(gulp.dest('./build/css/'))
        .pipe(browserSync.stream());    
});

gulp.task('min_js', ()=> {
    return gulp.src('./app/js/**')
        
        // .pipe(rename({suffix: '.min'}))
        .pipe(uglify({toplevel: true}))
        .pipe(gulp.dest('./build/js/'))
        .pipe(browserSync.stream());    
});

gulp.task('min_img', ()=> {
    return gulp.src('./app/img/**')
        .pipe(imagemin([ 
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 80, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))    

        .pipe(gulp.dest('./build/img/'))
        .pipe(browserSync.stream());    
});

gulp.task('copy_fonts', ()=> {
    return gulp.src('./app/fonts/**')
        
        .pipe(gulp.dest('./build/fonts/'))
        .pipe(browserSync.stream());    
});

gulp.task('copy_video', ()=> {
    return gulp.src('./app/video/**')
        
        .pipe(gulp.dest('./build/video/'))
        .pipe(browserSync.stream());    
});

gulp.task('pug2html', ()=> {
    return gulp.src('./app/pug/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        // .pipe(htmlValidator)
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());    
});

gulp.task('watch', () => {
    browserSync.init({
       server: {
          baseDir: "./"
       },
       port: 3000
    });

    gulp.watch('./app/scss/*.scss', gulp.series('scss2css'))
    gulp.watch('./app/css/*.css', gulp.series('min_css'))
    gulp.watch('./app/js/*.js', gulp.series('min_js'))
    // gulp.watch('./app/img/**', gulp.series('min_img'))
    gulp.watch('./app/fonts/*', gulp.series('copy_fonts'))
    gulp.watch('./app/video/*', gulp.series('copy_video'))
    gulp.watch('./app/pug/*/*.pug', gulp.series('pug2html'))
});

gulp.task('default', gulp.series('watch'));

gulp.task('compile_build', gulp.series('scss2css', 'min_js', 'min_img', 'copy_fonts', 'copy_video', 'pug2html'));

gulp.task('reset_build', () => { 
    return del(['./build/*'])
});
const gulp = require("gulp");

gulp.task('build', function(){
    gulp.src("index.html")
        .pipe(gulp.dest("public/"))
        .on('error', errorLog);

    gulp.src("style.css")
        .pipe(gulp.dest("public/"))
        .on('error', errorLog);

    gulp.src("script.js")
        .pipe(gulp.dest("public/"))
        .on('error', errorLog);
})

function errorLog(error){
    console.log("error: ", error);
}
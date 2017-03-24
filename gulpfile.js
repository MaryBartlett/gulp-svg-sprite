const gulp = require('gulp');
const watch = require('gulp-watch');
const svgSprite = require('gulp-svg-sprite');
const removeSvgProperties = require('remove-svg-properties').stream;
const svgConfig = {
    mode: {
        defs: {
            sprite: "svg-defs-sprite.svg",
            bust: true,
            dest: ""
        }
    }
}

gulp.task('svgs', function () {
    gulp.src([
        'svg/*.svg'
    ])
    .pipe(removeSvgProperties.remove({
        properties: ['fill', 'color', 'opacity']
    }))
    .pipe(svgSprite(svgConfig))
    .pipe(gulp.dest('build'));
});


gulp.task('watch', ['svgs'], function () {
    gulp.watch('svg/*.svg', ['svgs'])
});

gulp.task('default', ['svgs']);

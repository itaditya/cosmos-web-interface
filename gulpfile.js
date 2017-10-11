const gulp = require('gulp');
const concat = require('gulp-concat');
const sort = require('sort-stream');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const ngAnnotate = require('gulp-ng-annotate');
const path = require('path');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

const paths = {
  scripts: './app/**/*.js',
  styles: ['./css/**/*.css', './app/**/*.css', './app/**/*.scss'],
  images: './images/**/*',
  index: './app/index.html',
  partials: ['./app/**/*.html', '!app/index.html'],
  dist: './dist'
};

const fileOrder = (a, b) => {
  aScore = a.path.includes("module.js") ? 1 : 0;
  bScore = b.path.includes("module.js") ? 1 : 0;
  return bScore - aScore;
}

gulp.task('default', ['dev', 'watch']);
gulp.task('watch', () =>  gulp.watch(paths.scripts, ['dev']))
gulp.task('dev', () => {
  gulp.src(paths.scripts)
  .pipe(eslint())
  .pipe(eslint.format())
  // .pipe(eslint.failAfterError())
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(sort(fileOrder))
  .pipe(sourcemaps.init())
  .pipe(concat("app.js"))
  .pipe(ngAnnotate())
  .pipe(gulp.dest(paths.dist));
});
gulp.task('build', () => {
  gulp.src(paths.scripts)
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(sort(fileOrder))
  .pipe(sourcemaps.init())
  .pipe(concat("app.js"))
  .pipe(ngAnnotate())
  .pipe(uglify())
  .pipe(gulp.dest(paths.dist));
});

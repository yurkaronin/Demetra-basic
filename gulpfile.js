const gulp = require('gulp');
// очистка/удаление устаревших файлов и папок
const rm = require('gulp-rm');
// просмотр проекта в браузере в реальном времени
const browserSync = require('browser-sync').create();
// подключение отдельных файлов на страницу
const fileInclude = require('gulp-file-include');

// позволяет посмотреть ошибку и не останавливает работу таска при этом
const plumber = require('gulp-plumber');
// Отслеживание ошибок с выводом уведомлений в консоли
const notify = require('gulp-notify');
// работа с scss файлами
const sass = require('gulp-sass')(require('sass'));
// объединение стилевых файлов scss в один
const sassGlob = require('gulp-sass-glob');
// для возможности найти точную строку в исходных файлах
const sourcemaps = require('gulp-sourcemaps');
// const concat = require('gulp-concat');
// const babel = require('gulp-babel');
// const uglify = require('gulp-uglify');

// Очистка финальной папки build
gulp.task( 'clean', function() {
  return gulp.src( 'app/tmp/**/*', { read: false })
  .pipe( rm() )
})

const plumberConfig = {
  errorHandler: notify.onError(function (err) {
    return {
      title: 'HTML include',
      sound: false,
      message: err.message,
    };
  }),
};
// работа с html-файлами
gulp.task('html', function () {
  return gulp.src('./src/html/*.html')
  .pipe(plumber(plumberConfig))
  .pipe(fileInclude())
  .pipe(gulp.dest('./build/'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('styles', function () {
  return gulp
  .src(['./node_modules/normalize.css/normalize.css', './src/scss/main.scss'])
  .pipe(sourcemaps.init())
  .pipe(sassGlob())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./build/css/'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function () {
    return gulp.src(['./src/js/*.js'])
    .pipe(gulp.dest('./build/js/'))
    .pipe(browserSync.reload({stream: true}));
  }
);

gulp.task('copy:libs', function () {
  return gulp.src('./src/libs/**/*')
  .pipe(gulp.dest('./build/libs/'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('copy:img', function () {
  return gulp.src('./src/img/**/*')
  .pipe(gulp.dest('./build/img/'))
  .pipe(browserSync.reload({stream: true}));
})

// отслеживание изменений в исходных файлах проекта
gulp.task('watch', function () {
  gulp.watch('./src/html/**/*.html', gulp.series('html'));
  gulp.watch('./src/scss/**/*.scss', gulp.series('styles'));
  gulp.watch('./src/js/**/*.js', gulp.series('scripts'));
  gulp.watch('./src/libs/**/*', gulp.series('copy:libs'));
  gulp.watch('./src/img/**/*', gulp.series('copy:img'));
})

// запуск локального сервера
gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: './build/',
    },
  });
});

// главный task, состоящий из всех выше описанных задач
gulp.task('default',
  gulp.series(
    'clean',
    gulp.parallel('html', 'styles', 'scripts', 'copy:img', 'copy:libs'),
    gulp.parallel('server', 'watch')
  )
);
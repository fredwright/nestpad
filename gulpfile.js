
// SETUP

// gulp
var gulp = require('gulp'); 

// plugins
var stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    envify = require('envify'),
    source = require('vinyl-source-stream'),
    nodemon = require('gulp-nodemon');

// paths
var app = './src/client',
    dist = './public',
    css = '/css',
    js = '/js';

// nodemon hack - it doesn't wait for tasks to finish on change
var nodemon_instance;

//======================================================

// PROCESS

// compile stylus
gulp.task('css', function() {
  return gulp.src(app + css + '/main.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dist));
});

// compile javascript
gulp.task('js', function() {
  return browserify({
      entries: app + js + '/app.jsx',
      debug: true,
    })
    .transform(reactify)
    .transform(envify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(dist));
});

//======================================================

// SERVE

// watch
gulp.task('watch', function() {
  gulp.watch([app + css + '/*.styl'],['css']);
  gulp.watch([app + js + '/**/*.js', app + js + '/*.jsx'],['js']);
  gulp.watch(['./**/*.js', './**/*.jsx'], ['nodemon']);
});

// serve
gulp.task("nodemon", function () {
  if(!nodemon_instance) {
    nodemon_instance = nodemon({ script:"server.js", nodeArgs: ["--harmony", "--debug"],
    env: { "NODE_ENV": "development" }, watch: "__manual_watch__",  ext: "__manual_watch__"  });
  } else {
    nodemon_instance.emit("restart");
  }
});

// default
gulp.task('default', [ 'css', 'js', 'watch', 'nodemon' ]);
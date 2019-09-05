const {series, src, dest}= require('gulp');
const sass = require('gulp-sass');


sass.compiler = require('node-sass');

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  
  function runSass () {
    return src('./sass/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(dest('./static'));
  };

  exports.runSass = runSass;
  exports.default = series(runSass);


  //Documentation
  //https://www.npmjs.com/package/gulp-sass
  //https://gulpjs.com/docs/en/getting-started/creating-tasks

//https://medium.com/@adambretz/heroku-gulp-c96dc3a8044d
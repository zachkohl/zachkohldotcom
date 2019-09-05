const {watch, series, src, dest}= require('gulp');
const sass = require('gulp-sass');




sass.compiler = require('node-sass');

function defaultTask(cb) {
    // place code for your default task here
    console.log('default Task activated')
    cb();
  }
 
  function runSass (cb) {
    console.log('running sass compilation')
   src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('./static'));
  cb();
};



//Only for Dev
if (process.env.NODE_ENV !== 'production') {
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

  function browserSyncTask(cb){
    browserSync.init({
        proxy:"localhost:3000",
        files:["sass/*.*"],
        browser: "brave",
        port:5000
    })
   cb();
};

function nodemonTask(cb){
    var started = false;
     nodemon({
        script: 'index.js',
    }).on('start',function(){
        if(!started){
            cb();
            started = true;
        }
    });
    cb();
}


}//end for Dev
  






//Make a method public
  exports.runSass = runSass;


  if (process.env.NODE_ENV !== 'production') {

      exports.default = series(runSass,nodemonTask,browserSyncTask,function(){
        watch('sass/*',series(runSass));
      
     });
        }else{
            exports.default = series(runSass);
        }



  //Documentation
  //https://www.npmjs.com/package/gulp-sass
  //https://gulpjs.com/docs/en/getting-started/creating-tasks

//https://medium.com/@adambretz/heroku-gulp-c96dc3a8044d

//https://gist.github.com/sogko/b53d33d4f3b40d3b4b2e //nice work showing how to hook up browser sync and nodemon
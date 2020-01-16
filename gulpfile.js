const {watch, series, src, dest}= require('gulp');
const sass = require('gulp-sass');
var babel = require("gulp-babel");




sass.compiler = require('node-sass');

function defaultTask(cb) {
    // place code for your default task here
    console.log('default Task activated')
    cb();
  }
 
  function runSass (cb) {
    console.log('running sass compilation')
   src('./dev/sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('./static'));
  cb();
};

function moveJavascript (cb) {
  console.log('running sass compilation')
 src('./dev/javascript/*.js')
 .pipe(babel())
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
        files:["dev/sass/*.*","dev/javascript/*.*","views/pages/*.*"],
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

      exports.default = series(runSass,moveJavascript,nodemonTask,browserSyncTask,function(){
        watch(['dev/sass/*','dev/javascript/*','views/pages/*'],series(runSass,moveJavascript));
      
     });
        }else{
            exports.default = series(runSass);
        }



  //Documentation
  //https://www.npmjs.com/package/gulp-sass
  //https://gulpjs.com/docs/en/getting-started/creating-tasks

//https://medium.com/@adambretz/heroku-gulp-c96dc3a8044d

//https://gist.github.com/sogko/b53d33d4f3b40d3b4b2e //nice work showing how to hook up browser sync and nodemon

//In conclusion, make sure you pay attention to what is going on. Are you in the production or development environments? 
//What files do you want your system to be watching? This system works best if you don't watch everything. 
//Make sure you check Browser-Sync, Nodemon, and the Watch line to make sure they are all pointed the way you want. 
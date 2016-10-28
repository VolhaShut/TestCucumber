var gulp = require('gulp'),
    //runSequence = require('run-sequence'),
    protractor=require('gulp-protractor').protractor;
    view=require('./test/profile/view');
    capabilities=require('./test/profile/capabilities'),
    util = require('gulp-util');

var exec = require('child-process-promise').exec;

gulp.task('stream',function(){
    var steams=util.env.streams?util.env.streams:2,
        browsersStr = util.env.browsers ? util.env.browsers : 'chrome/firefox',
        viewsStr = util.env.views ? util.env.views : 'mobile/desktop',
        browsers=browsersStr.split('/'),
        views=viewsStr.split('/'),
        promises=[];

    var f1 = function(browser,viewmodel,tag){
        return exec('gulp test --browser='+browser+' --view='+viewmodel)
            .then(function (results) {
                console.log(results.stdout);
            })
            .catch(function (err) {
                console.error('ERROR: ',err.stdout);
            });
    };
   
    for (var i=0;i<steams;i++){
       promises.push(f1(browsers[i],views[i]));
    };

   return  Promise.all([promises]);    

});

gulp.task('test', function() {

    util.env.browser?process.env.BROWSER=util.env.browser:process.env.BROWSER;
    util.env.view?view.getViewModel(util.env.view):process.env.VIEW;    
    console.log(process.env.BROWSER);
    console.log(process.env.VIEW);
    console.log(process.env.TAGS);
    return gulp.src(['./*/*.js'])
        .pipe(protractor({
            'configFile': "config.js"
            }))  
});



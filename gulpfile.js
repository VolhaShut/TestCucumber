var gulp = require('gulp'),
runSequence = require('run-sequence'),
protractor=require('gulp-protractor').protractor;
view=require('./test/profile/view');
capabilities=require('./test/profile/capabilities'),
 util = require('gulp-util');

var exec = require('child-process-promise').exec;

gulp.task('cmd',function(){
    var promises=[];
    var f1 = function(browser,view,tag){
        process.env.BROWSER=browser;
        process.env.VIEW=view;
        process.env.TAGS=tag;
        return exec('gulp protractor')
            .then(function (results) {
                console.log(results.stdout);
            })
            .catch(function (err) {
                console.error('ERROR: ',err.stdout);
            });
    };
    promises.push(f1('chrome',view.tabletP,view.tabletPTag));
    promises.push(f1('firefox',view.desktop,view.desktopTag));
    promises.push(f1('chrome',view.mobile,view.mobileTag));

   return  Promise.all([promises]);
    

});

gulp.task('protractor', function() {
    var viewmodel;
    util.env.browser?process.env.BROWSER=util.env.browser:process.env.BROWSER;
    util.env.view?viewmodel=util.env.view:process.env.VIEW;
    switch(viewmodel){
             case "tabletP":
                  process.env.VIEW=view.tabletP;
             break;
             case "desktop":
                  process.env.VIEW=view.desktop;   
             break;
             case "mobile":
                  process.env.VIEW=view.mobile;    
             break;
             case "tabletL":
                  process.env.VIEW=view.tabletL;     
             break;

    }
    console.log(process.env.BROWSER);
    console.log(process.env.VIEW);
    console.log(process.env.TAGS);
    return gulp.src(['./*/*.js'])
        .pipe(protractor({
            'configFile': "config.js",
            'autoStartStopServer': false
            }))  
});


gulp.task('test', function(){
    runSequence(
        'cmd');
});
var Menu=require('../support/menu.js');
var inherit=require('./inherit.js');
var HomePage=function(){
    HomePage.superclass.constructor.call(this); 
    this.logoProfile='.btn.btn_x-large.btn_navbar_user-dropdown';
    this.profileButton='.dropdown__user-info.user-info';
    this.firstArticle='.post__title_link';
    
    this.getPage=function(url){
        browser.ignoreSynchronization=true;
        return browser.get(url);
    };

    this.gotoProfile= function(){
        element(by.css(this.logoProfile)).click();
        
        return element(by.css(this.profileButton)).click();
    };

    this.gotoArticle=function(){
        return element.all(by.css(this.firstArticle)).get(0);
        
    }


   
};
   inherit(HomePage,Menu);

module.exports=HomePage;
var Menu=require('../support/menu.js');
var inherit=require('./inherit.js');
var HomePage=function(){
    HomePage.superclass.constructor.call(this); 
   // this.EC=protractor.ExpectedConditions;
    this.logoProfile='.btn.btn_x-large.btn_navbar_user-dropdown';
    this.profileButton='.dropdown__user-info.user-info';
    this.logoutButton='Выйти';
    this.firstArticle='.post__title_link';
    this.commentTextArea='comment_text';
    this.preview='.preview disableble';
    this.previewText='preview_placeholder';
    
    this.getPage=function(url){
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization=true;
        return browser.get(url);
    };

    this.gotoProfile= function(){
        element(by.css(this.logoProfile)).click();
        
        return element(by.css(this.profileButton)).click();
    };

    this.gotoArticle=function(){
       element.all(by.css(this.firstArticle))
       .then(function(items){
           items[0].click();
       })
    };

    this.writeComment=function(){
       // browser.wait(this.EC.presenceOf($(this.commentTextArea)), 25000);
       browser.sleep(3000);
        element(by.xpath('//*[@id="comments_form_placeholder"]/h2/a')).click()
        .then (function(element){
            browser.actions().sendKeys("I write a comment");
            return browser.sleep(3000);
        })
    };

    this.logout=function(){
        element(by.css(this.logoProfile)).click();
        element(by.linkText(this.logoutButton)).click();
    }


   
};
   inherit(HomePage,Menu);

module.exports=HomePage;
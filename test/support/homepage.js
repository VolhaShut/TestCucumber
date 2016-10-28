var Menu=require('../support/menu.js');
var HomePage={
    logoProfile:'.btn.btn_x-large.btn_navbar_user-dropdown',
    profileButton:'.dropdown__user-info.user-info',
    logoutButton:'Выйти',
    firstArticle:'.post__title_link',
    commentTextArea:'comment_text',
    preview:'.preview disableble',
    previewText:'preview_placeholder',
    
    getPage:function(url){
       // browser.driver.manage().window().maximize();
        browser.ignoreSynchronization=true;
        return browser.get(url);
    },

    gotoProfile: function(){
          return Promise.all([
              element(by.css(this.logoProfile)).click(),
              element(by.css(this.profileButton)).click()
          ]);
    },

    gotoArticle:function(){
      return element.all(by.css(this.firstArticle))
       .then(function(items){
          return items[0].click();
       })
    },

    writeComment:function(){
       browser.sleep(3000);
      return  element(by.xpath('//*[@id="comments_form_placeholder"]/h2/a')).click()
        .then (function(element){
            browser.actions().sendKeys("I write a comment");
            return browser.sleep(3000);
        })
    },

    logout:function(){
      return Promise.all([
           element(by.css(this.logoProfile)).click(),
           element(by.linkText(this.logoutButton)).click()
        ])
    },
      
};
Object.assign(HomePage,Menu);   

module.exports=HomePage;

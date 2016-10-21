var steps=function(){
    
    this.setDefaultTimeout(45000);
    var url='http://habrahabr.ru';

    this.Given(/^I am on website page$/, function(){    
        return this.homePage.getPage(url);
    });

    this.When(/^I click on Login button$/,function(){  
        return this.homePage.gotoLogin();
    });

    this.Then(/^I enter '(.+)' and '(.+)' correctly$/,function(email,password){
         return this.loginPage.login(email,password);
     });

    this.Then(/^I click to profile button and go to the profile page$/,function(){
        return this.homePage.gotoProfile();
    });
    this.Then(/^I check a username$/,function(){
          return this.profile.getUserName()
              .then(function(user){
                 return expect(user).to.equal('@JustTest');
           });    
    });
    this.Then(/^I set up avatar in profile$/, function(){
        var _this=this;
        return _this.profile.changeProfile()
        .then (function(){
            return _this.profile.changeAvatar();
        }) 
        
    })
    this.Then(/^I go to publications page$/,function(){
        browser.sleep(2000);
        return this.homePage.gotoPublications();
    })
    

};
module.exports=steps;
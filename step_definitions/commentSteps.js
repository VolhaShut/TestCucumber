var steps=function(){
    this.Given(/^I am on publications page$/,function(){
        browser.sleep(2000);
        return this.homePage.gotoPublications();
    });
    this.When(/^I search '(.+)' in articles$/,function(text){
        return this.homePage.find(text);
    });
    this.Then(/^I click to first article$/,function(){
        return this.homePage.gotoArticle();          
    });
    this.Then(/^I write a comment$/,function(){
        return  this.homePage.writeComment();
    });
    this.Then(/^I log out$/, function(){
        return this.homePage.logout();
    })
};
module.exports=steps;
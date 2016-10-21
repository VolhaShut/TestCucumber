var steps=function(){
    this.Given(/^I am on publications page$/,function(){
        browser.sleep(2000);
        return this.homePage.gotoPublications();
    });
    this.When(/^I search '(.+)' in articles$/,function(text){
        return this.homePage.find(text);
    });
    this.Then(/^I click to first article$/,function(text){
        return console.log(this.homePage.gotoArticle());
    });
};
module.exports=steps;
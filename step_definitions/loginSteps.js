//var loginPage=require('../support/login.js');
var homePage=require('../support/homepage.js');

var steps=function(){


    // this.When(/^I am on website page$/,function (){
    //         browser.ignoreSynchronization=true;
    //         browser.get('http://habrahabr.ru');
    //     });

    
    // this.Then(/^I click on  '(.+)' link$/,function(field){
    //         element(by.id(field)).click(); 
    //  Given I am on website page
    // When I click on Login button
    // Then I login using valid creadentials
             
    // });
    
    this.Given('^I am on website page$', function(){
        
        return homePage.getPage();
       
    });
    this.When('^I click on Login button$',function(){
        return homePage.navigate();
    });
    // this.Then(/^I enter in '(.+)' java script$/,function(field){
    //     element(by.id(field)).click(); 
    //     var EC = protractor.ExpectedConditions;

        
    //     element(by.id('search-form-field')).sendKeys('java script');
    //     browser.actions().sendKeys(protractor.Key.ENTER).perform();
    //     // element(by.id(field)).sendKeys('js');
    //     // element(by.id(field)).sendKeys('java');
    //     browser.sleep(10000);
    //     });
};
module.exports=steps;
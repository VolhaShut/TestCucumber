// var steps=function(){
//     this.When(/^I am on website page$/,function (){
//             browser.ignoreSynchronization=true;
//             browser.get('http://habrahabr.ru');
//         });

//     this.Then(/^I enter in '(.+)' java script$/,function(field){
//         element(by.id(field)).click(); 
//         var EC = protractor.ExpectedConditions;
//         element(by.id('search-form-field')).sendKeys('java script');
//         browser.actions().sendKeys(protractor.Key.ENTER).perform();

//         browser.sleep(10000);
//         });
//     this.Then(/^I'm going to login page$/,function(){
//         element(by.id('login')).click();

//     });
//     this.Then(/^I enter correct login and password$/,function(){
//         element(by.id('email_field')).sendKeys('example@gmail.com');
//          element(by.name('password')).sendKeys('password');
//     });
// };
// module.exports=steps;
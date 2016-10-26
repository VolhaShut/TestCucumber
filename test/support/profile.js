var path = require('path');
var Profile=function(){
    this.EC=protractor.ExpectedConditions;
    this.getUserName=function(){
        browser.wait(this.EC.visibilityOf($('.author-info__nickname')), 15000); 
        return element(by.css('.author-info__nickname')).getText();
    },
    this.changeProfile=function(){
        return element(by.css('.btn.btn_blue.btn_large')).click();
    },
    this.changeAvatar=function(){

        var avatar='../pic/avatar.jpg';
        var absolutePath=path.resolve(__dirname,avatar);
        browser.wait(this.EC.visibilityOf($('.item.avatar')), 15000); 
        browser.switchTo().frame(element(by.css('.iframe_uploader')).getWebElement());
        element(by.name('avatar_image')).sendKeys(absolutePath);
        browser.wait(this.EC.visibilityOf($('#result')), 30000); 
        browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[0]);
         });
         
    }
};
module.exports=Profile;
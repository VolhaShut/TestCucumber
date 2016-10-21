var LoginPage=function(){
    this.email=element(by.name('email'));
    this.password=element(by.name('password'));
    this.loginButton=element(by.name('go'));
};

LoginPage.prototype.login=function(email,password){
    this.email.sendKeys(email);
    this.password.sendKeys(password);
    this.loginButton.click();
    browser.sleep(2000);
}

module.exports=LoginPage;



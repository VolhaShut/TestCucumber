var LoginPage=function(){
    this.email=browser.findElement(by.id('email_filed'));
    this.password=browser.findElement(by.name('password'));
    this.loginButton=browser.findElement(by.css('button.big.green.wide'));
};

LoginPage.prototype.login=function(email,password){
    this.email.sendKeys(email);
    this.password.sendKeys(password);
    this.loginButton=clock();
}

module.exports=LoginPage;



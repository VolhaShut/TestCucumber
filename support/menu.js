var Menu=function(){
    this.logo='.logo';
    this.searchButton='search-form-btn';
    this.searchInput='search-form-field';
    this.publicationButton='//*[@id="navbar-links"]/li[1]/a';
    this.hubsButton='//*[@id="navbar-links"]/li[2]/a';
    this.companiesButton='//*[@id="navbar-links"]/li[3]/a';
    this.usersButton='//*[@id="navbar-links"]/li[4]/a';
    this.sandboxButton='//*[@id="navbar-links"]/li[5]/a';
    this.registrationButton='.btn.btn_x-large.btn_navbar_registration';
    this.loginButton='login';
    this.navigationPages='//*[@id="nav-pages"]/li';
    this.previous_page='previous_page';
    this.next_page='next_page';
    this.EC=protractor.ExpectedConditions;
};

    Menu.prototype.find=function(text){
        element(by.id(this.searchButton)).click(); 
        element(by.id(this.searchInput)).sendKeys(text);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };

    Menu.prototype.gotoPublications=function(){
        return  element(by.xpath(this.publicationButton)).click();
   }
    Menu.prototype.gotoHubs=function(){
        return  element(by.xpath(this.hubsButton)).click();
   }
    Menu.prototype.gotoCompanies=function(){
        return  element(by.xpath(this.companiesButton)).click();
   }
       Menu.prototype.gotoUsers=function(){
        return  element(by.xpath(this.usersButton)).click();
   }
       Menu.prototype.gotoSandbox=function(){
        return  element(by.xpath(this.sandboxButton)).click();
   }
       Menu.prototype.gotoRegistration=function(){
        return  element(by.css(this.registrationButton)).click();
   }
       Menu.prototype.gotoLogin=function(){
         browser.wait(this.EC.presenceOf($('#login')), 15000);
        return  element(by.id(this.loginButton)).click();
   }
       Menu.prototype.gotoPreviosPage=function(){
        return  element(by.id(this.previous_page)).click();
   }
       Menu.prototype.gotoNextPage=function(){
        return  element(by.id(this.next_page)).click();
   }
       Menu.prototype.getNavigatePages=function(){
        return  this.navigationPages;
   }
      Menu.prototype.gotoStartPage=function(){
       return element(by.css(this.logo)).click();
   }
      Menu.prototype.find=function(text){
        element(by.id(this.searchButton)).click(); 
        element(by.id(this.searchInput)).sendKeys(text);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };
module.exports=Menu;
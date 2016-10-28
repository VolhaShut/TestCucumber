var Menu={
    logo:'.logo',
    searchButton:'search-form-btn',
    searchInput:'search-form-field',
    publicationButton:'//*[@id="navbar-links"]/li[1]/a',
    hubsButton:'//*[@id="navbar-links"]/li[2]/a',
    companiesButton:'//*[@id="navbar-links"]/li[3]/a',
    usersButton:'//*[@id="navbar-links"]/li[4]/a',
    sandboxButton:'//*[@id="navbar-links"]/li[5]/a',
    registrationButton:'.btn.btn_x-large.btn_navbar_registration',
    loginButton:'login',
    navigationPages:'//*[@id="nav-pages"]/li',
    previous_page:'previous_page',
    next_page:'next_page',
    EC:protractor.ExpectedConditions,

    gotoPublications:function(){
        return  element(by.xpath(this.publicationButton)).click();
    },

    gotoHubs:function(){
        return  element(by.xpath(this.hubsButton)).click();
    },
    gotoCompanies:function(){
        return  element(by.xpath(this.companiesButton)).click();
    },
    gotoUsers:function(){
        return  element(by.xpath(this.usersButton)).click();
    },
    gotoSandbox:function(){
        return  element(by.xpath(this.sandboxButton)).click();
    },
    gotoRegistration:function(){
        return  element(by.css(this.registrationButton)).click();
    },
    gotoLogin:function(){
        browser.wait(this.EC.presenceOf($('#login')), 15000);
        return  element(by.id(this.loginButton)).click();
    },
    gotoPreviosPage:function(){
        return  element(by.id(this.previous_page)).click();
    },
    gotoNextPage:function(){
        return  element(by.id(this.next_page)).click();
    },
    getNavigatePages:function(){
        return  this.navigationPages;
    },
    gotoStartPage:function(){
       return element(by.css(this.logo)).click();
    },
    find:function(text){
        return Promise.all([
        element(by.id(this.searchButton)).click(),
        element(by.id(this.searchInput)).sendKeys(text),
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        ]);
    }
}

  
module.exports=Menu;
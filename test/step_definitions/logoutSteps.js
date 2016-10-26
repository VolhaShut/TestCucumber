var steps=function(){
    this.setDefaultTimeout(60000);
    
    this.Then(/^I log out$/, function(){
        return this.homePage.logout();
    });
};
module.exports=steps;
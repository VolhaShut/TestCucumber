var LoginPage=require('./login.js');
var HomePage=require('./homepage.js');
var Menu=require('../support/menu.js');
var Profile=require('../support/profile.js');

function World(){
    this.homePage=HomePage;
    this.loginPage=new LoginPage();
    this.profile=new Profile();

}
module.exports=function(){
    this.World=World;
}
// var HomePage=function(){
//     this.getPage=function(){
//     browser.ignoreSynchronization=true;
//     browser.get('http://habrahabr.ru');
//     };
//     this.navigate=function(){
//     browser.findElement(by.id('login')).click();
//     };
// };

var HomePage={
    getPage:function(){
        // console.log('start');
        // browser.ignoreSynchronization=true;
        return browser.get('http://habrahabr.ru');

    },
    navigate:function(){
         return browser.findElement(by.id('login')).click();
    }
};


module.exports=HomePage;
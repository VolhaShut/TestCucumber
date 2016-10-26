var capabilities={
    firefox:{
        "browserName" : "firefox",
        "marionette": true,
        "browser.startup.page": 0,
        "startup.homepage_welcome_url.additional": "about:blank",
        "firefox_binary": "/home/olga/firefox45/firefox-bin"
    },
    chrome:{
        "browserName" : "chrome"       
    }
}
module.exports=capabilities;
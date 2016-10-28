var view={
    
        "mobile": "--window-size=500,800",
        "mobileTag": ['~@art','@important','@exit'],
        "tabletP": "--window-size=768,1024",
        "tabletPTag": ['~@art','@important','@exit'],
        "tabletL": "--window-size=1024,768",
        "tabletLTag": ['~@art','@important','@exit'],
        "desktop": "--window-size=1920,1080",
        "desktopTag": ['@art','@important','~@exit'],
     
        getViewModel:function(viewmodel){
                 switch(viewmodel){
             case "tabletP":
                  process.env.VIEW=this.tabletP;
                  process.env.TAGS=this.tabletPTag;
             break;
             case "desktop":
                  process.env.VIEW=this.desktop;
                  process.env.TAGS=this.desktopTag;   
             break;
             case "mobile":
                  process.env.VIEW=this.mobile;
                  process.env.TAGS=this.mobileTag;    
             break;
             case "tabletL":
                  process.env.VIEW=this.tabletL;
                  process.env.TAGS=this.tabletLTag;     
             break;

         }
        }
}
     
module.exports=view;

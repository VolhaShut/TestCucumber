exports.config={
		getPageTimeout: 10000,
		allScriptsTimeout: 10000,
		 capabilities: {
			'browserName': process.env.BROWSER||'firefox',
		 	"firefox_binary": "/home/olga/firefox45/firefox-bin",
			 chromeOptions : {
                args: [process.env.VIEW||'--window-size=1280,800']
            }

		 },
		framework: 'custom',
		frameworkPath: require.resolve('protractor-cucumber-framework'),
		specs:['test/features/*.feature'],
		cucumberOpts:{
			require:[
				'test/support/world.js',
				'test/step_definitions/*.js'
			],
            tags:process.env.TAGS||['@important'],
		 	format:'pretty'
		},


	onPrepare:function(){
		var chai=require('chai');
			chaiAsPromised=require('chai-as-promised');
			expect=chai.expect;
			chai.use(chaiAsPromised);
	}

    		//  multiCapabilities: [
        //  {
        //     name: 'firefox_desktop',
        //     browserName: 'firefox',
        //     firefox_binary: "/home/olga/firefox45/firefox-bin",
		// 	chromeOptions : {
        //         args: ['--window-size=1280,800']
        //     }
        // },
        // {
        //     name: 'chrome_mobile',
        //     browserName: 'chrome',
        //     chromeOptions : {
        //         args: ['--window-size=500,800']
        //     }
        // },
        // {
        //     name: 'chrome_tablet_portrait',
        //     browserName: 'chrome',
        //     chromeOptions : {
        //         args: ['--window-size=768,1024']
        //     }
        // }
        // {
        //     name: 'chrome_tablet_landscape',
        //     browserName: 'chrome',
        //     chromeOptions : {
        //         args: ['--window-size=1024,768']
        //     }
        // },
        // {
        //     name: 'chrome_desktop',
        //     browserName: 'chrome',
        //     chromeOptions : {
        //         args: ['--window-size=1280,800']
        //     }
        // }
//],
};
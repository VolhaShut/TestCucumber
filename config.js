exports.config={
		seleniumAddress: 'http://localhost:4444/wd/hub',
		getPageTimeout: 10000,
		allScriptsTimeout: 10000,
		capabilities: {
			'browserName': 'chrome',
				timeout : 100000
		},

		framework: 'custom',
		frameworkPath: require.resolve('protractor-cucumber-framework'),
		
		specs:['features/*.feature'],

		cucumberOpts:{
			require:[
				'support/world.js',
				'step_definitions/*.js'
				
			],
		 format:'pretty'
	},

	onPrepare:function(){
		var chai=require('chai');
			chaiAsPromised=require('chai-as-promised');
			expect=chai.expect;
			chai.use(chaiAsPromised);
	}
};
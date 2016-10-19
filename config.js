exports.config={
		seleniumAddress: 'http://127.0.01:4444/wd/hub',
		getPageTimeout: 10000,
		allScriptsTimeout: 10000,
		capabilities: {
			'browserName': 'chrome'
		},

		framework: 'custom',
		frameworkPath: require.resolve('protractor-cucumber-framework'),
		specs:['features/*.feature'],

		cucumberOpts:{
			require:[
				//'support/world.js',
				'step_definitions/*.js'
				
			],
		 format:'pretty'
	}
};
// Karma configuration
// Generated on Fri Apr 24 2015 11:31:06 GMT-0300 (Hora oficial do Brasil)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        // frameworks: ['jasmine'],
        frameworks: ['mocha', 'chai', 'browserify'],

        // list of files / patterns to load in the browser
        files: [
            //LIBRARIES
            'client/js/angular/angular.js',
            'client/js/angular-mocks/angular-mocks.js',
            'client/js/angular-resource/angular-resource.js',
            'client/js/angular-ui-router/release/angular-ui-router.js',

            //APP
            'client/app/app.js',
            'client/app/**/*.module.js',
            'client/app/**/*.controller.js',
            'client/app/**/services/*.services.js',
            'client/app/**/services/*.resource.js',
            'client/app/**/services/*.resourceMock.js',
            // 'client/app/**/services/*.resource.js',
            // 'client/app/**/services/*.resourceMock.js',
            // 'client/app/**/services/*.services.js',
            'client/app/**/*_spec.js',
        ],

        browserify: {
            debug: true
        },
        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'client/app/**/services/*.resourceMock.js': ['browserify'],
            // 'client/app/**/*.js': ['coverage']
        },

        // coverageReporter: {
        //     type: 'text',
        //     dir: 'coverage/'
        // },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // reporters: ['spec', 'coverage'],
        reporters: ['spec'],
        // plugins: ["karma-spec-reporter"],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};

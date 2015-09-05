var dirnameRegExp = new RegExp(__dirname);
var platform = process.platform;
var coverageifyConfig = {
    ignores: [
        /\.json/,
        /_tests_/,
        /_mocks_/
    ],
    contains: []
};

if (/win/.test(platform)) {
    coverageifyConfig.ignores.push(dirnameRegExp);
} else if (/linux/.test(platform)) {
    coverageifyConfig.contains.push(dirnameRegExp);
}

module.exports = function(config) {
    config.set({

        basePath: './',

        frameworks: ['browserify', 'mocha'],

        files: [
            'lib/test/globals.js',
            'node_modules/react-tools/src/test/phantomjs-shims.js',
            'components/**/_tests_/*.js',
            'lib/**/_tests_/*.js',
            'views/**/_tests_/*.js'
        ],

        preprocessors: {
            'lib/test/globals.js': [ 'browserify' ],
            'components/**/_tests_/*.js': [ 'browserify' ],
            'lib/**/_tests_/*.js': [ 'browserify' ],
            'views/**/_tests_/*.js': [ 'browserify' ]
        },

        browserify: {
            debug: true,
            transform: [ 'reactify', ['coverageify', coverageifyConfig] ]
        },

        browsers : ['PhantomJS'],

        reporters: ['progress', 'coverage'],

        coverageReporter : {
            dir: 'test-coverage',
            reporters: [
                {type: 'html', subdir: 'html'}
            ]
        },

        logLevel: config.LOG_ERROR,

        singleRun: false,

        autoWatch: true

    });
};
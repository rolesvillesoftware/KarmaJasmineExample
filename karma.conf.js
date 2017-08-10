module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'browserify'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-ie-launcher'),
      require('karma-Edge-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-browserify')
    ],

    files: [
      'spec/**/*[sS]pec.js'
    ],

    preprocessors: {
      '**/*[sS]pec.js': ['browserify']
    },
    reporters: ['progress', 'kjhtml'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Edge', 'IE'],
    singleRun: false
  });
};
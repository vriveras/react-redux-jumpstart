module.exports = function(grunt) {

  // load dependent tasks
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // load webpack
  var webpack = require("webpack");

  // load the webpack config
  var webpackConfig = require("./webpack.config.js");
  console.log(webpackConfig);

  // initialize grunt
  grunt.initConfig({
    webpack: {
      jumpstart: webpackConfig
    },
    "webpack-dev-server":
    {
      jumpstart:{
        hot: true,
        webpack: webpackConfig,
        keepalive: true,
        contentBase: 'app/',
        historyApiFallback:true
        //https:true
      }
    },
    copy: {
      bootstrap: {
        files: [
          // includes files within path and its sub-directories
          {expand: true, cwd: './node_modules/bootstrap/dist/', src: ['**'], dest: 'app/'},
        ],
      },
    },
  });

  grunt.registerTask('default', ['copy:bootstrap','webpack']);
  grunt.registerTask('dev', ['copy:bootstrap', 'webpack-dev-server']);

};

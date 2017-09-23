'use strict';

module.exports=function(grunt) {
    
  grunt.initConfig({
      
    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),
      
      
    // configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      all: ['Grunfile.js', 'js/lib/*.js', 'js/*.js']
    },
    // compile less stylesheets to css ----------------------------------------- 
    less: {
      build: {
        files: {
          'css/styles.css': 'less/styles.less'
        }
      }
    },
    // configure watch to auto update ------------------------------------------
    watch: {
      stylesheets: {
        files: ['css/*.css', 'less/*.less', 'less/lib/*.less'],
        tasks: ['less']
      },
      javascripts: {
        files: ['js/lib/*.js', 'js/*.js'],  
        tasks: ['jshint'] 
      }    
    }

  });
    
  grunt.loadNpmTasks('grunt-contrib-less');    
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less','jshint']);
      

};
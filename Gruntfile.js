module.exports = function(grunt){

  grunt.initConfig({

    assemble: {
      pages: {
        files: {
            'result/': 'parts/pages/*.html'
        },
        options: {
          layout: 'parts/template.html',
          flatten: true
        }
      }
    },
    csslint: {
      strict: {
        src: ['assets/style.css']
      }
    }

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask('default', ['assemble', 'csslint']);

};

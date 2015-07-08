module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'clean': {
      build: {
        src: ["lib"]
      }
    },

    'concat': {
      js: {
        src: ['js/three.min.js', 'js/ntype.js', 'js/type.js'],
        dest: 'lib/mintype.js',
      },
    },

    'uglify': {
      js: {
        options: {
          banner: '/* ' + grunt.file.read('LICENSE.md') + ' */'
        },
        files: {
          'lib/mintype.min.js': 'lib/mintype.js'
        }
      }
    },

  });


  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('cleanup', [
    'clean:build',
  ]);

  grunt.registerTask('build', [
    'cleanup',
    'concat:js',
    'uglify:js',
  ]);
  grunt.registerTask('default', [
    'build'
  ]);
};

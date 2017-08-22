module.exports=function(grunt){
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-sass-lint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'uncompressed/scss/',
                    src: '*.scss',
                    dest: 'assets',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/',
                    ext: '.min.css'
                }]
            }
        },
        sasslint: {
            options: {
                configFile: 'config/.sass-lint.yml',
                exclude: [
                    'uncompressed/scss/_trumps.utilities.scss'
                ]
            },
            target: ['uncompressed/scss/\*.scss']
        }
      
    });

    grunt.registerTask('dev',['sass', 'sasslint']);
    grunt.registerTask('prod',['sass','cssmin']);

    grunt.registerTask('default','prod');
}
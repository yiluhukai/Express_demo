module.exports = function(grunt){

    // load plugins
    [
        'grunt-cafe-mocha',
        // 'grunt-contrib-jshint',
        'grunt-eslint',
        'grunt-exec',
    ].forEach(function(task){
        grunt.loadNpmTasks(task);
    });

    // configure plugins
    grunt.initConfig({
        eslint: {
            options: {
                configFile: '.eslintrc.js'
            },
            //target:['meadowlark.js']
            app: ['meadowlark.js', 'public/js/**/*.js', 'lib/**/*.js'],
            qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
        },
        // jshint: {
        //     app: ['meadowlark.js', 'public/js/**/*.js', 'lib/**/*.js'],
        //     qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
        // },
        // exec: {
        //     linkchecker: { cmd: 'linkchecker http://localhost:3000' }
        // },
        cafemocha: {
            all: { src: 'qa/tests-*.js', options: { ui: 'tdd' }, }
        },
    });

    // register tasks
    //sgrunt.registerTask('default', ['jshint','exec','cafemocha']);
    grunt.registerTask('default', ['eslint','cafemocha']);
};

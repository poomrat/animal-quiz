module.exports = (grunt) ->

  grunt.loadNpmTasks 'grunt-contrib-jshint'
  grunt.loadNpmTasks 'grunt-mocha-cov'

  grunt.registerTask 'test',             [ 'jshint',   'test:spec', 'test:behaviour' ]
  grunt.registerTask 'test:spec',        [ 'mochacov:spec' ]
  grunt.registerTask 'test:behaviour',   [ 'mochacov:behaviour' ]

  grunt.registerTask 'default',          [ 'jshint' ]

  grunt.initConfig
    src:
      js:       [ 'src/**/*.js'   ]
      spec:     [ 'test/spec/*.spec.js' ]

      features:
        path:   'features'
        js:     'test/features.js'

      jshint:   [
        '<%= src.js %>', '<%= src.spec %>',
        '<%= src.features.js %>'
      ]

    jshint:
      src:      [ '<%= src.js %>' ]
      options:
        jshintrc:       true

    mochacov:
      options:
        harmony: true
      spec:
        options:
          files: [ '<%= src.spec %>' ]
          reporter: 'spec'

      behaviour:
        options:
          files: [ '<%= src.features.js %>' ]
          reporter: 'spec'
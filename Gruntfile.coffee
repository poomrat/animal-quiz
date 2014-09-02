module.exports = (grunt) ->

  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-jshint'
  grunt.loadNpmTasks 'grunt-mocha-istanbul'

  grunt.registerTask 'test',             [ 'jshint',   'test:spec', 'test:behaviour' ]
  grunt.registerTask 'test:spec',        [ 'mocha_istanbul:spec' ]
  grunt.registerTask 'test:behaviour',   [ 'mocha_istanbul:behaviour' ]

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

    clean: [ 'target' ]

    jshint:
      src:      [ '<%= src.js %>' ]
      options:
        jshintrc:       true

    mocha_istanbul:
      options:
        root:     '.'
        reportFormats: [ 'text-summary', 'html' ]

      spec:
        src: 'test/spec'
        options:
          recursive:      true
          mask:           '**/*.spec.js'
          coverageFolder: 'target/spec-coverage'

      behaviour:
        src: 'test'
        options:
          recursive:      false
          mask:           'features.js'
          coverageFolder: 'target/behaviour-coverage'
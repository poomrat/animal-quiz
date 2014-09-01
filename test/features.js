'use strict';

var Yadda        = require('yadda'),
    path         = require('path'),
    player_steps = require('../features/steps/player_steps'),
    QuizDriver   = require('../features/lib/quiz_driver'),
    bin_path     = path.resolve(__dirname + '/../../bin/animal-quiz');

Yadda.plugins.mocha.StepLevelPlugin.init();

new Yadda.FeatureFileSearch('features').each(function(file) {

    // Previously features(file, function(feature))
    featureFile(file, function(feature) {

        var animal_quiz_driver = new QuizDriver(bin_path);

        var yadda = new Yadda.Yadda(player_steps, { driver: animal_quiz_driver });

        scenarios(feature.scenarios, function(scenario) {
            steps(scenario.steps, function(step, done) {
                yadda.yadda(step, done);
            });
        });

        after(function() {
            animal_quiz_driver.quit();
        });
    });
});
'use strict';

var English    = require('yadda').localisation.English,
    path       = require('path'),
    expect     = require('chai').expect,
    dictionary = require('./dictionary'),
    QuizDriver = require('../lib/quiz_driver'),
    format     = require('util').format,

    bin_path   = path.resolve(__dirname + '/../../bin/animal-quiz');

module.exports = (function() {
    var quiz = new QuizDriver(bin_path);

    function startQuiz() { return quiz.start(); }
    function confirm()   { return quiz.confirm(); }
    function decline()   { return quiz.decline(); }


    return English.library(dictionary)

        .given('I play the game for the first time', function(next) {
            startQuiz()
                .then(confirm)

                .done(next);
        })

        .given('I start the game', function(next) {
            startQuiz()

                .done(next);
        })

        .then('I see it will try to guess the animal I\'m thinking of', function(next) {
            expect(quiz.lastQuestion()).to.equal('Hello, think of an animal and I\'ll try to guess it. Ready?');

            next();
        })

        .when('I\'m asked if I think of (a|an) "$animal"', function(article, animal, next) {
            expect(quiz.lastQuestion()).to.equal(format('Is it %s %s?', article, animal));

            next();
        })

        .when('I confirm(?:.*)', function(next) {
            confirm()

                .done(next);
        })

        .when('I decline', function(next) {
            decline()

                .done(next);
        })

        .then('I win', function(next) {
            expect(quiz.lastQuestion()).to.contain('You win!');

            next();
        })

        .then('the game wins', function(next) {
            expect(quiz.lastQuestion()).to.contain('I knew it!');

            next();
        });
})();
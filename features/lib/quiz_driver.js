'use strict';
var spawn        = require('child_process').spawn,
    _            = require('lodash'),
    EventEmitter = require('events').EventEmitter,
    inherits     = require('util').inherits,
    split        = require('split'),
    q            = require('q');

function QuizDriver(path) {
    var animal_quiz_process,
        questions = _([]),
        self = this;

    EventEmitter.call(this);


    function write(what) {
        var deferred = q.defer();

        self.once('question', function() {
            deferred.resolve();
        });

        animal_quiz_process.stdin.write(what + '\n');

        return deferred.promise;
    }

    this.start = function() {
        function cleanedUp(question) {
            return question.trim() + '?';
        }

        function emit(question) {
//            console.log('emitting: ', question);
            self.emit('question', question);
        }

        var deferred = q.defer();

        self.on('question', function(question) {
//            console.log('pushing: ', question);

            questions.push(question);
        });

        self.once('question', function(question) {
            deferred.resolve();
        });

        animal_quiz_process = spawn(path);

        animal_quiz_process.stdout
            .pipe(split('?'))
            .on('data', function(question) {
                emit(cleanedUp(question));
            });

        return deferred.promise;
    };

    this.confirm = function() {
        return write('yes');
    };

    this.decline = function() {
        return write('no');
    };

    this.lastQuestion = function() {
        return questions.last();
    };

    this.quit = function() {
        // cleanup if needed
    };
}

inherits(QuizDriver, EventEmitter);

module.exports = QuizDriver;

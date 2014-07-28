'use strict';

var promptly = require('promptly'),
    q        = require('q'),
    sys      = require('util');

function ask(question) {
    var deferred = q.defer();

    promptly.confirm(question, { 'default': 'yes' }, function(err, confirmed) {
        deferred.resolve(confirmed);
    });

    return deferred.promise;
}

function say(what) {
    sys.puts(what);
}

module.exports = function() {

    ask('Hello, think of an animal and I\'ll try to guess it. Ready?').then(function(confirmed) {
        if (confirmed) {
            ask('Is it a kitten?').then(function(confirmed) {
                if (confirmed) {
                    say('I knew it! Play again?');
                }
                else {
                    say('You win! Help me learn from my mistake before you go. What animal were you thinking of?');
                }
            });
        }
    });
};
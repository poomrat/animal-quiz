# The Animal Quiz

This exercise is inspired by a [Ruby exercise of the same name](http://rubyquiz.com/quiz15.html)
written by [James Nolan "Jim" Weirich](http://en.wikipedia.org/wiki/Jim_Weirich). The focus of this kata however is on using both
[BDD](http://en.wikipedia.org/wiki/Behavior-driven_development) and
[TDD](http://en.wikipedia.org/wiki/Test-driven_development) when developing the solution.

This repository is primarily intended for the participants of [my](http://smartcodeltd.co.uk/) Test-Driven Tuesday workshop at [Thomson Reuters](http://thomsonreuters.com/).

[![Build Status](https://travis-ci.org/jan-molak/animal-quiz.svg?branch=master)](https://travis-ci.org/jan-molak/animal-quiz)

## The goal

The game should work like this. The program starts by telling the user to think of an animal.
It then begins asking a series of yes/no questions about that animal: does it swim, does it have hair, etc.
Eventually, it will narrow down the possibilities to a single animal and guess that (Is it a kitten?).

If the program has guessed correctly, the game is over and may be restarted with a new animal.
If the program has guess incorrectly, it asks the user for the kind of animal they were thinking of and then asks
for the user to provide a question that can distinguish between its incorrect guess and the correct answer.
It then adds the new question and animal to its "database" and will guess that animal in the future (if appropriate).

## Example run
```
$> ./bin/animal-quiz
Think of an animal and I'll try to guess it. Ready? 
> y
Is it a kitten? 
> n
You win! Help me learn from my mistake before you go. What animal were you thinking of? 
> a rabbit
What question would help me distinguish a rabbit from a kitten? 
> Is it a small animal?
For a rabbit, what is the answer to your question?
> y
Thanks. Play again?
> y
Think of an animal and I'll try to guess it. Ready? 
> y
Is it a small animal?
> y
Is it a rabbit?
> n
You win! Help me learn from my mistake before you go. What animal were you thinking of? 
> a Shih Tzu
What question would help me distinguish a rabbit from a Shih Tzu? 
> Is it a kind of dog?
For a Shih Tzu, what is the answer to your question?
> y
Thanks. Play again?
> y
Think of an animal and I'll try to guess it. Ready? 
> y
Is it a small animal?
> y
Is it a kind of dog?
> y
Is it a Shih Tzu?
> y
I knew it! Play again?
> n
```

## The ATDD Cycle
![ATDD Cycle](http://i.stack.imgur.com/g5XkI.png)
<a href="http://www.amazon.co.uk/gp/product/0321503627/ref=as_li_ss_il?ie=UTF8&camp=1634&creative=19450&creativeASIN=0321503627&linkCode=as2&tag=smartcode-21"><img align="right" border="0" src="http://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0321503627&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=smartcode-21" ></a><img src="http://ir-uk.amazon-adsystem.com/e/ir?t=smartcode-21&l=as2&o=2&a=0321503627" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

## Running:

* the quiz: `./bin/animal-quiz` or `node bin/animal-quiz`
* the 'local build' (jshint, unit and acceptance tests): `grunt test`
* acceptance tests only: `grunt test:behaviour`
* unit tests only: `grunt test:spec`

## What's where?

* Features: 
  * scenarios: [/features](https://github.com/jan-molak/animal-quiz/tree/master/features)
  * acceptance testing framework: [/features/lib](https://github.com/jan-molak/animal-quiz/tree/master/features/lib)
  * steps: [/features/steps](https://github.com/jan-molak/animal-quiz/tree/master/features/steps)
  * runner: [/test/features.js](https://github.com/jan-molak/animal-quiz/tree/master/test/features.js)
* Unit tests: [/test/spec](https://github.com/jan-molak/animal-quiz/tree/master/test/spec)
* Application: [/src](https://github.com/jan-molak/animal-quiz/tree/master/src)

## Manuals

* [Yadda](https://github.com/acuminous/yadda), the bdd tests framework
* [Mocha](http://visionmedia.github.io/mocha/), the test runner
* [Chai](http://chaijs.com/api/bdd/), the assertion library

## Useful materials

* A primer on user stories by Antony Marcano - [It starts with a story](http://antonymarcano.com/blog/2014/05/it-starts-with-a-story/)
* Test doubles in JavaScript by Jan Molak - [Mocking JavaScript a little - test doubles with sinon.js, mocha and chai](http://smartcodeltd.co.uk/blog/2014/07/22/mocking-javascript-a-little-test-doubles-with-sinonjs-mocha-and-chai/)
* Original [Ruby Quiz](http://rubyquiz.com/quiz15.html)
* Potentially helpful data structure: [Binary Tree](http://en.wikipedia.org/wiki/Binary_tree)
* Node CLI by Fil Maj and Michael Brooks: [Master the CLI with Node](http://michaelbrooks.ca/deck/jsconf2013/#/)
* Setting up node in [IntelliJ/WebStorm](http://www.jetbrains.com/idea/webhelp/node-js-and-npm.html)

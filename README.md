# Module pattern and reflective learning

## Setup

Clone this repo.

Install the dependencies

    $ npm install

## Run the tests

    $ npm test

## Run the app

    $ npm start

## Questions

* How does the function that wraps a model keep `QUESTION_MARK_COUNT` private? Why is this useful?

* How does the pattern used `question` and `exclaim` differ from the pattern used by `interrobangInjectOnLoad` and `interrobangInjectOnRun`? Why are different patterns used?

* Can you predict and confirm the value of `this` in all the parts of each module?

* What are the pros and cons of the module pattern used by `interrobangInjectOnRun` and the module pattern used by `interrobangInjectOnLoad`?

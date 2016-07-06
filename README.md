# JavaScript module pattern

## Instructions

### High level goal for the week

At a high level, this week is about building an effective process for researching, understanding and using new technologies?

In this workshop, you'll practice one part of this: investigating how a design pattern solves a problem.  Specifically: investigating how the module pattern encapsulates (and shares) code.

### Learning objectives

1. Describe the module pattern as a way to encapsulate and share code.
2. Explain how the module pattern makes some code available and hides other code.
3. Use the module pattern in your code.

### Investigate how the module pattern works (30 mins)

* Pair up.

* Clone this repo.

* Run `npm install` to install the dependencies.

* Run `npm test` to run the tests.

* Run `npm start` to run the app.  View it at the URL displayed in your console.

* Investigate the code in this repo to see how it works.  Use `console.log` to inspect the state and follow the flow.  Research the pattern to understand what problems it solves, and what trade-offs it makes.  (See resources below for a starting point.)

* Try and answer the questions below.

### Plenary (15 mins)

We'll come back together for a short plenary to discuss our understanding of the module pattern, and the techniques we used to understand the code.

## Questions

1. How does the function that wraps the question module keep `QUESTION_MARK_COUNT` private? Why is this useful?

2. How does the pattern used in the `question` and `exclaim` modules differ from the pattern used in the `interrobang` module? Why are different patterns used?

3. Can you predict and confirm the value of `this` in all the parts of each module?

## Resources

* [Immediately Invoked Function Expression (IIFE)](http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript)
* :pill: [JavaScript module pattern](https://github.com/makersacademy/course/blob/master/pills/javascript_module_pattern.md)

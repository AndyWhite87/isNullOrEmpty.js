# Grunt project base

A handy basis for front end JavaScript projects built with Node and Grunt.

Preconfigured to run JSHint analysis and Jasmine unit tests (with code coverage stats) before concatenating and minifying files. Also comes with Travis CI and Coveralls preconfigured.

## Setup

0. Fork this repo.

0. Update package.json to include your project and author details

0. Assuming Node is installed, run npm install to get the configured Grunt packages.

As your project progresses, you'll probably need to update the `concat`, `uglify` and `jasmine` configurations in `gruntfile.js` to account for your project's dependencies, and to update code coverage thresholds to keep code quality high.

## Configured tasks

#### grunt watch

Begins watching `gruntfile.js` and all files in the `src` and `test` folders. When any of them change, JSHint will run on the same files, then any Jasmine specs in the `test` folder will run. JSHint and Jasmine results willm be output to the console each time.

#### grunt test

Runs JSHint on `gruntfile.js` and all files in the `src` and `test` folders, then runs any Jasmine specs in the `test` folder and records code coverage. Also runs the Coveralls task, which only succeeds when running in Travis CI.

#### grunt build

Runs JSHint, Jasmine and code coverage as above, then concatenates and uglifies files as configured in `gruntfile.js`. Built files appear in a root folder named `dist`.

## Data Typescript

## Development Dependencies

- Gulp
- npm install -g gulp

## Install

1. `git@github.com:ride-share-market/data-ts.git`
2. `cd data-ts`
3. `npm install`
4. `gulp compile`

## Development Tasks

Issue the `gulp` command to list all available tasks.

Clean and compile:

	gulp compile && mkdir -p dist/log dist/pids

Watch *.ts files, lint them and compile to the dist/ folder

	gulp watch-compile

Run all unit tests (the compiled *_spec.js files in the dist/ folder)

	gulp test

Watch for compiled *.js file changes and run tests

	gulp watch-test

## Run application

**Manually**

	node dist/app.js

**With PM2 Process Manager**

	npm run start
	npm run stop
	npm run list

## Typescript Definitions

**Search examples**

	./node_modules/.bin/tsd query nconf

**Install examples**

	./node_modules/tsd/build/cli.js query node --save --action install

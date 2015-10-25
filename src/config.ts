'use strict';

import nconf = require('nconf');
import path = require('path');

const env: string = process.env.NODE_ENV = process.env.NODE_ENV || 'loc';

console.log(`${__dirname}/config/env/${env}.json`);

nconf
	.argv()
	.env()
	.file({file: path.join(__dirname, 'config', 'env', `${env}.json`)});

nconf.defaults({
	logDir: 'log'
});

export const config: any = nconf;

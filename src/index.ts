'use strict';

import path = require('path');

import {config} from './config';

// console.log(config);
// console.log(config.get('logDir'));
console.log(config.get('database').mongodb.uri);

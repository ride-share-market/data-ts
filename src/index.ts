'use strict';

import {config} from './config';

import path = require('path');
console.log(path.join('a', 'b'));

// console.log(config);
// console.log(config.get('logDir'));
console.log(config.get('database').mongodb.uri);

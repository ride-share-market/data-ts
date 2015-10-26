'use strict';

// import path = require('path');

import {config} from './conf/config';

import * as log from './conf/log'

// console.log(config);
console.log(config.get('root'));
// console.log(config.get('database').mongodb.uri);

let logger: any = log.create('mylog');

logger.info('test message');


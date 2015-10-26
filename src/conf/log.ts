'use strict';

import bunyan = require('bunyan');
import path = require('path');

const env: string = process.env.NODE_ENV = process.env.NODE_ENV || 'loc';

import {config} from './config';

export let create = function (name) {

  let logger: any = bunyan.createLogger({
    name: name,
    streams: [
      {
        path: path.join(config.get('root'), config.get('logDir')) + '/' + name + '_' + env + '.log'
      }
    ]
  });

  return logger;

};

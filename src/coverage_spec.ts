'use strict';

import path = require('path');
import requireWalk = require('require-walk');

requireWalk(path.join(__dirname, 'lib'))();

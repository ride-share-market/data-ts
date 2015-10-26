'use strict';

import chai = require('chai');
let should: any = chai.should();

import {greeting} from './world';

describe('world', () => {

	it('should return text', () => {
		should.exist(greeting);
		let text: string = 'friend';
		greeting(text).should.equal(`Hello ${text}`);
	});

});

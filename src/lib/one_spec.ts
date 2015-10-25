'use strict';

import chai = require('chai');
let should: any = chai.should();

import fun = require('./one');

describe('lib', () => {

	it('should', () => {
		should.exist(should);
		let res: number = fun.fun(2);
		res.should.equal(4);
	});

});

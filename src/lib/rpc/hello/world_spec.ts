'use strict';

import chai = require('chai');
let should: any = chai.should();
import uuid = require('uuid');

import {greeting} from './world';

describe('world', () => {

	it('should return text', () => {
		should.exist(greeting);

		let rpcMessage: any = {
			content: JSON.stringify({
				jsonrpc: '2.0',
				method: 'hello.world',
				params: {
					name: 'Alice'
				},
				id: uuid.v4()
			})
		};

		greeting(rpcMessage).should.equal('Hello Alice');
	});

});

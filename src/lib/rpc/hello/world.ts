'use strict';

export let greeting: any = (msg: any): string => {

	let jsonRpc: any;

	try {
		jsonRpc = JSON.parse(msg.content.toString());
	} catch (e) {
		return `JSON Parse Error: ${msg.content.toString()}`;
	}

	return `Hello ${jsonRpc.params.name}`;

};

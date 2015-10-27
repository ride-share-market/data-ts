'use strict';

export let greeting: any = (msg: any): string => {
	console.log(msg.content.toString());
	return `Hello ${msg.content.toString()}`;
};

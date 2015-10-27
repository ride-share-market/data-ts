import amqpRpcFactory = require('amqp-rpc-factory');

import {config} from './../../conf/config';

let rmq: any = config.get('messageQueue').rabbitmq;

let rmqConn: string = `amqp://${rmq.user}:${rmq.password}@${rmq.url}/${rmq.vhost}`;

let rpcPublisherFactory: PublisherFactory = amqpRpcFactory.publisher;

let publisher: Publisher = rpcPublisherFactory.create({
	standalone: true,
	url: rmqConn
});

publisher.publish('World').then((res: any): any => {
	console.log(res);
});

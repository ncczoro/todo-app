const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();



eventEmitter.on('start', (data) => {
    console.log('started', data);
})

eventEmitter.emit('start', {
    foo: 'bar'});
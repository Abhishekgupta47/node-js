const EvenEmitter = require('events');

class MyEmitter extends EvenEmitter { }

const MyEmitter = new MyEmitter();

MyEmitter.on('WaterFull', () => {
    console.log('please turn off the motor');
    setTimeout(() => {
        console.log('please turn off the moter ! its a gentle reminder');
    }, 3000)
});

console.log("the script is  running");
console.log("script is still running");
MyEmitter.emit('WaterFull')
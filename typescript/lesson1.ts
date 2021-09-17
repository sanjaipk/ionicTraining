import { com } from "./lesson2";
// import { usertypes } from "./lesson3";
var a = 'test';
console.log(a);

 class comp{
    computer: com.compSet;
    constructor() {
        // this.monitor = ['monitor', 'printer'];
        // this.input = ['keyboard', 'mouse'];
        // this.cpu = 'intel 64-bit';
        this.computer = {
            monitor: ['monitor', 'printer'],
            input: ['keyboard', 'mouse'],
            cpu: 'amd 64-bit'
        };
    }
    printConfig() {
        this.computer.monitor.forEach(el => {
            console.log(el);
        });
        this.computer.input.forEach(el => {
            console.log(el);
        })
        console.log(this.computer.cpu);
    }
}



var b: comp = new comp();
console.log(b.computer.cpu);
b.printConfig();


var b1: com.apple.Applecomp = new com.apple.Applecomp();
b1.printConfig();
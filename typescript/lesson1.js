"use strict";
exports.__esModule = true;
var lesson2_1 = require("./lesson2");
// import { usertypes } from "./lesson3";
var a = 'test';
console.log(a);
var comp = /** @class */ (function () {
    function comp() {
        // this.monitor = ['monitor', 'printer'];
        // this.input = ['keyboard', 'mouse'];
        // this.cpu = 'intel 64-bit';
        this.computer = {
            monitor: ['monitor', 'printer'],
            input: ['keyboard', 'mouse'],
            cpu: 'amd 64-bit'
        };
    }
    comp.prototype.printConfig = function () {
        this.computer.monitor.forEach(function (el) {
            console.log(el);
        });
        this.computer.input.forEach(function (el) {
            console.log(el);
        });
        console.log(this.computer.cpu);
    };
    return comp;
}());
var b = new comp();
console.log(b.computer.cpu);
b.printConfig();
var b1 = new lesson2_1.com.apple.Applecomp();
b1.printConfig();

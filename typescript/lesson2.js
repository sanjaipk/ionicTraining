"use strict";
exports.__esModule = true;
exports.com = void 0;
var com;
(function (com) {
    var apple;
    (function (apple) {
        var Applecomp = /** @class */ (function () {
            function Applecomp() {
                // this.monitor = ['monitor', 'printer'];
                // this.input = ['keyboard', 'mouse'];
                // this.cpu = 'intel 64-bit';
                this.computer = {
                    monitor: ['monitor', 'printer'],
                    input: ['keyboard', 'mouse'],
                    cpu: 'amd 64-bit'
                };
                this.os = 'MacOS';
            }
            Applecomp.prototype.printConfig = function () {
                this.computer.monitor.forEach(function (el) {
                    console.log(el);
                });
                this.computer.input.forEach(function (el) {
                    console.log(el);
                });
                console.log(this.computer.cpu);
                console.log(this.os);
            };
            return Applecomp;
        }());
        apple.Applecomp = Applecomp;
    })(apple = com.apple || (com.apple = {}));
})(com = exports.com || (exports.com = {}));

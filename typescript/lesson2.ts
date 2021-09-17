export namespace com {
    export interface compSet{
        monitor: string[];
        input: string[];
        cpu: string;
    }
    export module apple {
        export class Applecomp {
            computer: compSet;
            os: string;
            constructor() {
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
            printConfig() {
                this.computer.monitor.forEach(el => {
                    console.log(el);
                });
                this.computer.input.forEach(el => {
                    console.log(el);
                })
                console.log(this.computer.cpu);
                console.log(this.os);
            }
            
            printMe(age: number, name: string);
            printMe(val: any, val1: any) {
                console.log(val);

            }
        }
    }
}
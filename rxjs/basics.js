
import { Observable } from "rxjs";
import { map,filter } from "rxjs/operators";

function AsyncStream(obs){
    var t1 = setInterval(() => {
        obs.next(Math.random()*10);
    }, 1000);
}

var myobserver = Observable.create(AsyncStream);
// myobserver.subscribe(res => Listener(res));
var step1stream = myobserver.pipe(map(x => Math.round(x)));
var step2stream = step1stream.pipe(filter(x => x > 5));
step2stream.subscribe(res => Listener(res));
function Listener(res) {
    console.log(res);
}


//notes:
// npm i esm
// node-r esm basics.ja
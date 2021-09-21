console.log("----------------------------------------------------------------------------------");

var myVar = 100;

function SomeFunction() {

    function WhoIsThis() {
        var myVar = 200;

        console.log("myVar = " + myVar); // 200
        console.log("this.myVar = " + this.myVar); // 100
    }

    WhoIsThis(); 
}
console.log(this);
SomeFunction();
function right(){
    this.suvai = 'karam';
    return 200;
}
var test1 = new right();
console.log(test1.suvai);//works!
console.log("====================================================")
function wrong(){
    this.suvai = 'karam';
    return {a:'500'};
}
var test2 = new wrong();
console.log(test2.suvai); //undefined
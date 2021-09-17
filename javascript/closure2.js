let greetText = "Hello from global";
function greeting1() {
  let greetText = "Hello";
  //function created here. Hence it value of greetText from this scope
  sayHi = function () {
    console.log(greetText);
  };
  return sayHi; //returning sayHi and not invoking it
}

funcSayHi = greeting1();

function greeting2() {
  let greetText = "Hi";
  //Function Invoked in scope of greeting2.
  //But it is still connected to the scope of greeting1 via Closures
  funcSayHi();
}

greeting2(); //Hello

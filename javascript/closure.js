
4
5
function counter() {
 
  let count = 10;
    startCount = function () {
    
    count++;
        console.log(count);
  
  };
  count++;
  return startCount;
}
 
showCount= counter()
 
showCount() //11
var a = showCount() //11
console.log(a);
//closer
//lexical scope
//here once the method call value will 
//intailize but again the method will call then that time value will not be changed
let sum = function (a) {
    console.log(a);
    let c = 4;
    return function (b) {
        return a + b + c;
    }
}
var store = sum(2);
console.log(store(5));



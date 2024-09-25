//higher order function

// forEach()
//filter()
//sort()
//map()
//reduce()

//craete an array object
let student = [
    { name: "akash", age: "26", sal: "10000" },
    { name: 'Laok', age: "22", sal: "20000" },
    { name: "Nasim", age: "45", sal: "22000" },
    { name: "Prakasha", age: "34", sal: "3453455" }
]
//craete an array with ages
const ages = [11, 22, 44, 33, 21, 5, 7, 2]



//using forEach() 
// forEach(callBackFunction)
//it is internally call synchronous callBack()
student.forEach(function (name, index) {
    console.log(name, index);
})

// without function
student.forEach((name, index) => {
    console.log(name);
})



//using filter() 
filter(callBackFunction)
// it is internally call synchronous callBack()
student.filter(function (all, index) {
    if (all.age > 25) {
        console.log(all);
    }
})

// using Arrow function
student.filter((all, index) => {
    if (all.age >= 25) {
        document.write(JSON.stringify(all));
        console.log(all);
    }
})


//using map
map(callabackFunction)
let dump1 = student.map((all, index) => {
    return `${all.name}`
})
console.log(dump);

// getting rwo records
let dump = student.map((all, index) => {
    return `${all.name}, ${all.age}`
})
console.log(dump);


//using sort
let p = student.sort((e1, e2) => {
    if (e1.age < e2.age) {
        return -1;
    }
    else {
        return 1;
    }
})
console.log(p);



//using reduce
//reduce(callbackFuncton,intialValue)
let h = student.reduce((callbackFunction, intialvalue) => {
    return callbackFunction.age + intialvalue
}, 2)
console.log(h);
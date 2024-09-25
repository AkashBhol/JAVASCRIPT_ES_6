//Rest in es6 using array
// rest means ...(three dots)
//it will cobine different different value in to a single arry this is rest
function m1(a, b, ...other) {
    console.log(a);
    console.log(other);
}
m1(1, 2, 3, 4, 5, 6);



//spread using array
//it will break an array to single single element
// let arr = ["akash", "prakasha", "nasim", "rahul"];

function m1(name1, name2, name3, name4) {
    console.log(name1, name2, name3);
}
m1(...arr);
console.log(...arr);


//Array destoring
var students = {
    name: "akash",
    age: "28",
    hobbies: ["cricket", "khatimariba"]
}

//using arraydestoring
let {name,age,hobbies}=students;
console.log(name);
console.log(age);
console.log(hobbies);

// using rest in objects 
let {...rest1 } = students;
console.log(rest);


//using spraed in js
//here we can update the value
var newStudent = {
    ...students,
    //suppose i want to update the value age to 28 to 29
    age: 29
}
let { ...rest } = newStudent;
console.log(rest);
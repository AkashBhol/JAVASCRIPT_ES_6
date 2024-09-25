// console.log("welcome js");
// //variable

// var a=15;
// var b=23;
// //var a=47;----->it will store the value like 47
// //console.log(a);//47
// function m1(){
//    var a=23;//if you redeclare it then var then it will not work like gobbla scope variable
//    console.log(a); //23
// }
// m1();
// console.log(a);//47

// //if you not redeclare it then the out put like
// var a=15;
//  b=23;
// // a=47;----->it will store the value like 47
// //console.log(a);//47
// function m1(){
//     a=23;//if you redeclare it then var then it will not work like gobbla scope variable
//    console.log(a); //47
// }
// m1();
// console.log(a);//47

//this one in Es5 var and in ES6 comes let and const
//you canot redlare it any of the scope it may be gloobal scope or locaal scope

let a=34;
let b=45;
//let a=38;//it was declared in the global sccope
console.log(a);//34
function m1(){
    let a=37;
    // let a=89;
    console.log(a);//34
}
console.log(a);
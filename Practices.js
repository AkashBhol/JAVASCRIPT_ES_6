
//synchoronous programing
//it will excurt line by line
// console.log("Akash");
// console.log("prakasha");
// function m1() {
//     console.log("nasim");
// }
// m1();
// console.log("raju");


//asynchoronous java script
// console.log("naism");
// function m1() {
//     console.log("akash");
//     setTimeout(() => {
//         console.log("hari")
//     }, 2000);
// }
// m1();
// console.log("Rupesh");

//in the set timeout internally calling the callback function
//what is callback
//passing a method as a parametr inside another method is kanown as callback
//synchronous calback
// function sum(a, b) {
//     console.log(a + b);
// }
// function cal(a,b,sumCallback){
//     sumCallback(a,b);
// }
// cal(2,3,sum);   
//asynchronous call back
// setTimeout(() => {
//     console.log("prakasha")
// }, 2000);

//nested callback with asynchronous
//calling the callback inside another the call back is known as nested callback
// function m1() {
//     setTimeout(() => {
//         console.log("read")
//     }, 2000)
//     setTimeout(() => {
//         console.log("Yellow")
//     }, 3000)
//     setTimeout(() => {
//         console.log("green");
//     },4000)
// }
// m1();

//to avoid nested callback we are using callbackHell
//callbackhell with synchronous

// const p = (getId, getNextDat) => {
//     setTimeout(() => {
//         console.log(`data: ${getId}`)
//         if (getNextDat) {
//             getNextDat();
//         }
//     }, 2000)
// }
// p("red", () => {
//     p("yellow", () => {
//         p("green", () => {
//             p("go")
//         })
//     })
// })

//to avoid callback hell we are using promise
//if the method is promise the it will be return reslove or reject
// function promise() {
//     return new Promise((reslove, teject) => {
//         reslove("success");
//     })
// }
// let promise1 = promise();
// promise1.then((res) => {
//     console.log(res);
// })
//promise chaiin
//calling one promise inside another promisse
//carete two promise method
//using synchronous
// function promise1() {
//     return new Promise((reslove, reject) => {
//         reslove("Red")
//     })
// }

// function promise2() {
//     return new Promise((reslove, reject) => {
//         reslove("Yellow")
//     })
// }

// function promise3() {
//     return new Promise((reslove, reject) => {
//         reslove("green");
//     })
// }

// //use promose cahining
// let p = promise1();
// p.then((res) => {
//     console.log(p);
//     let h = promise2();
//     h.then((res) => {
//         console.log(res);
//         let g = promise3();
//         g.then((res) => {
//             console.log(res);
//         })
//     })
// })

//using asynchronous
// function promise1() {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove("red")
//         }, 2000)
//     })
// }

// function promise2() {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove("yellow")
//         }, 4000)
//     })
// }

// function promise3() {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove("green")
//         }, 4000)
//     })
// }

// let p = promise1();
// p.then((res) => {
//     console.log(res);
//     let y = promise2();
//     y.then((res) => {
//         console.log(res);
//         let n = promise3();
//         n.then((res) => {
//             console.log(res);
//         }).catch((error) => {
//             console.log(error);
//         })
//     }).catch((error) => {
//         console.log(error);
//     })
// }).catch((error) => {
//     console.log(error);
// })



//to avoid asynchronous promise chain we are using 
//async and await

// async function callPromise() {
//     let p = await promise1();
//     console.log(p);
//     let p1 = await promise2();
//     console.log(p1);
//     let p3 = await promise3();
//     console.log(p3);
// }
// callPromise();

//api calling using 
// let url = "https://dog.ceo/api/breeds/image/random"

// const k = async () => {
//     let g = await fetch(url);
//     console.log(g);
//     alert(JSON.stringify(g));
// }
// k();





//Rest and spread operator
//suppose two objects are there i wnat to store on eobject into the another using rest
//Rest in array
// function m1(a, b, ...other) {
//     console.log(other);
// }
// m1(1, 2, 3, 4, 5, 6, 6, 7);
//using spared operator
// function m2(name, name1, name2, name3, name4) {
//     conspolo.log(name, name1, name2, name3, name4);
// }
// let arr = ["Alice", "Bob", "Charlie", "Dave", "Eve"];
// console.log(...arr);

//using two objects
// const student1 = {
//     name: "Akash",
//     age: '34',
//     hobbies: ["palying cricket", "Travailing"]
// }

// const student2 = {
//     ...student1,
//     age:"35"
// }
// console.log(student2);


//protoType
//do debugging
//it is working like inheritance
//create two object pass one object as prototpe in another object
// let student1 = {
//     name: "Akkash",
//     age: "23",
//     hobbises: ["cricket", "football"],
//     getName: function () {
//         return this.name;
//     },
//     getRollno: function () {
//         return this.getRollno;
//     }
// }

// let student2 = {
//     rollno: "123",
//     __proto__: student1
// }
// let student3 = {
//     bala: "bhala",
//     __proto__: student2
// }

// console.log(student3.getName());

//high priority order methods
//here we will chek prototype
//map
//forEach
//filter
//sort
//take an array
let p = [33, 23, 2, 4, 1, 5, 3, 7, 99]
// p.forEach((all, index) => {
//   //  console.log(all, index);
// })
// let h = p.filter((all, index) => {
//     return index == 8 || index==6 || index==3;
// })
// console.log(h);
//some basic programe in high priority order
//  p.forEach((all, index) => {
//     console.log(all, index);
// })
let o = p.map((all, index) => {
    // console.log(all);
    return all;
})
// console.log(o);
let g = o.filter((all, index) => {
    if (all % 2 == 0 && all>2) {
        return all;
    }
})
console.log(g);

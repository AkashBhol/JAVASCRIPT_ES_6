// synchronous js
// means it will exceute line by line
console.log("hi");
console.log("hellow");
console.log("no");

// Asynchronous programe
// means if anything will take time means it will go frowoord forther exceution then afetr it will return for that exceuction

// setTimeout iis an asynchronous function
console.log("hi")
setTimeout(()=>{
    console.log("ndb");
},5000);
console.log("p");
console.log("r");


// callback function
// calling a method as parameter inside another method is know as call back function
// call back with synchronous
function sum(a,b){
    console.log(a+b); 
}
function calculator(a,b,sumCallback){
   sumCallback(a,b);
}
calculator(1,2,sum);



// call back with acynchronous
setTimeout()



// nested callback
document.write("Red<br>");
setTimeout(() => {
    document.write("Red<br>");
}, 1000);
setTimeout(() => {
    document.write("yellow<br>");
}, 2000);
setTimeout(() => {
    document.write("green<br>");
}, 4000);



// using nested callBack function or callback hell
const getData = (getId, getnextData) => {
    setTimeout(() => {
        // document.write(getId);
        console.log(getId);
        if (getnextData) {
            getnextData();
        }
    }, 2000)
}
debugger
getData("red", () => {
    getData("yellow", () => {
        getData("green", () => {
            getData("Go")
        })
    })
});




// Promises ->
// have two state->1->resove
// ->2->reject

// if resove ,we can use .then()
// if reject ,we can use .catch()
const getPromises = () => {
    return new Promise((reslove, reject) => {
        // reslove("success");
        reject("error")
    })
}

let promise = getPromises();
promise.then((res) => {
    console.log("success" + res);
})
promise.catch((err) => {
    console.log("there is an error" + err)
})




promiseChanining
function asyncFunction1() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("getting first method data");
            reslove("success")
        }, 4000)
    })
}

function asyncFunction2() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("getting 2nd method data");
            reslove("success");
        }, 4000)
    })
}

let promise2 = asyncFunction1();
promise.then((res) => {
    console.log(res);
})

let promise1 = asyncFunction2();
promise1.then((res) => {
console.log(res);
})


// promiseChanning with getting the value here want to get the firstmethod value then secondmetthods value
function asyncFunction1() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("getting first method data");
            reslove("success")
        }, 4000)
    })
}

function asyncFunction2() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("getting 2nd method data");
            reslove("success");
        }, 4000)
    })
}

let promise3 = asyncFunction1();
promise.then((res) => {
    console.log(res);
    let promise1 = asyncFunction2();
    promise1.then((res) => {
        console.log(res);
    })
})



// handle callback hell using promise
// ex 51 to 68 implimented here with promise chaining to avoid callback hell
const getData = (getId) => {

    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log(getId);
            reslove("success")
        }, 2000);
    })
}
getData("red").then((res) => {
    console.log(res);

    getData("yellow").then((res) => {
        console.log(res);
        getData("Green").then((res) => {
            console.log(res);
        })
    })
})

// async await
// async ->
// it was written before a method name
// it will return promise
// this is returning fullfillrd state of promise

async function getData(getid) {
    console.log(getid);
}

async function getData(getId) {
    console.log(getId);
    setTimeout(() => {
        console.log(getId);
    },2000)
}

// await-> when we are using the awit it will take some time to execute
// there is a method is Api
function getData() {
    setTimeout(() => {
        console.log("hi")
    }, 2000)
}

async function getAllData() {
    console.log("nasim")
    await getData("red");
    console.log("kasim")
    await getData("green");
    console.log("kasim")
}
getAllData();


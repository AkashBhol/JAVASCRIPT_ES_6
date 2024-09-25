
//call()
//arrgument are passed in divijually
//craete two objects
var student = {
    name: "Akash Bhol",
    age: "25",
    printDetails: function () {
        console.log(this.name);//here this referse to the student object only
    }
}
//call the method which is present inside the objects
student.printDetails();

//2nd objects
var student1 = {
    name: "Alok Bhol",
    age: "21"
}
var student2 = {
    name: "Alok1 Bhol",
    age: "21"
}
//now if you want to call the student object of method printDeatils and want to get the name of student1 name
//use of call
student.printDetails.call(student1); //here only you can call only single objects




//now putting that method outside of the object

// var student = {
//     name: "Akash Bhol",
//     age: "25",
// }

// let printDetails = function () {
//     console.log(this);//here this referse to the student object only
// }
// var student1 = {
//     name: "Alok Bhol",
//     age: "21"
// }
// printDetails.call(student);
// printDetails.call(student1);








//Apply()
//Arrguments are passed in an array
var student = {
    name: "Akash Bhol",
    age: "25",
}

let printDetails = function (country, state) {
    console.log(JSON.stringify(this) + "" + country + "" + state);//here this referse to the student object only
}
var student1 = {
    name: "Alok Bhol",
    age: "21"
}
//for call()
//here you are passing indivijual element
// printDetails.call(student, "India", "Odisha");
// printDetails.call(student1, "India", "Odisha");

//for Apply()
//here you can passing List of the element
// printDetails.apply(student, ["India", "Odisha"]);
// printDetails.apply(student1, ["India", "Odisha"]);


//bind()
//same as call but we are storing callLater() and calling as our wish
let callLater=printDetails.bind(student, ["India", "Odisha"]);
callLater();
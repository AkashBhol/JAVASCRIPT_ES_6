//class and object in java script
//object->
//this will contain some state and behavour is known as object
let student = {
    fullname: "akash",
    age: 20,
    printmarks: function () {
        console.log("marks=", this.fullname)
    }
}
class toyatacar {
    start() {
        console.log("toyata car started successfully");
    }
    stop() {
        console.log("toyata car stopped successfully");
    }
    setBrand(brand) {
        this.brand = brand
    }
}

let object1 = new toyatacar;
console.log(object1);
console.log(object1.start());
// console.log(object1.stop());
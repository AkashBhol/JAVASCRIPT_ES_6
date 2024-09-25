//craete two object and pass one object to another as a prototype
//it is also known as ptototype inheritance
//1st object
const obj = {
    name: "akash",
    getName: function () {
        return this.name;
    },
    getRollNo: function () {
        return this.rollno;
    }
}

const obj2 = {
    rollno: "3",
    __proto__: obj
}
console.log(obj2.getName());
console.log(obj2.getRollNo());

const obj3 = {
    __proto__: obj2
}
console.log(obj3.getRollNo())

let p = ["Akash"]
console.log(p);
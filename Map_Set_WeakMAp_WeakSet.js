//set

//create an array
let arr = [1, 2, 3, 4, 4]
let set = new Set(arr);

//in prototype you can check the methods
//all methods are available
set.add(5);
set.add(5);
// set.clear();
// set.delete(3);
// console.log(set);



//map
//where we store the value in key and value pair
let map = new Map([[1, "Akash"], [2, "Prakasha"]])
//add some value
map.set(2, "Nasim");
// console.log(map);

// let filteredMap = new Map(
//     Array.from(map).filter(([key, value], index) => index > 1)
// );
// console.log(filteredMap);

map.forEach(([key, value], index) => {
    console.log(index, value, key);
})


//weakSet
//inside that we can add the only objects
let l = new WeakSet();
let n = {

}
l.add(n);
console.log(l);

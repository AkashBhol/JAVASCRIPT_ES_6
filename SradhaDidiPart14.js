//https://dog.ceo/api/breeds/image/random
let url = "https://dog.ceo/api/breeds/image/random"

//now i am calling the api using fetch()
//fetch() will return the promise
//the best approcah is calling await method is =======await=======
//when we calling the api it will take some time to provide the respoce
//if you are using await then the method should be async

const m1 = async () => {
    console.log("akash")
    //important
    let responce = await fetch(url);
    console.log(responce);
    let data = await responce.json();
    console.log(data);
}
m1();

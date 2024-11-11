const allInput = document.querySelectorAll("input");
const listaElem = document.getElementById("lista-numeri");
const btn = document.getElementById("btn");
const sparisci = document.getElementById("scompari");
const formElem = document.getElementById("form");


setTimeout(function () {

    listaElem.classList.add("d-none");

    sparisci.classList.remove("d-none");
    sparisci.classList.add("d-flex");



}, 2000);


const numeri = [];
let counter = 0;
const printElem = document.querySelectorAll("li");


let mess = "";


// for(let i = 0; i<5; i++){

//     const random = Math.floor(Math.random() * 10 + 1);

//     numeri.push(random);
//     console.log(numeri[i]);

//     mess += `<li>${numeri[i]}</li>`;
// }



formElem.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log(printElem);
    

    for(let i=0; i<allInput.length; i++){

        const currItem = allInput[i].value;


        
        console.log(currItem);

    }


    
    



});
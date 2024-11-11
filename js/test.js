const allInput = document.querySelectorAll("input");
const listaElem = document.getElementById("lista-numeri");
const btn = document.getElementById("btn");
const sparisci = document.getElementById("scompari");
const formElem = document.getElementById("form");
const printElem = document.querySelectorAll("li");


const numeri = [];
let counter = 0;


//numeri random
for(let i = 0; i<printElem.length; i++){

    const random = Math.floor(Math.random() * 10 + 1);

    numeri.push(random);
    console.log(numeri[i]);

    printElem[i].innerHTML= numeri[i];

}



//timer
setTimeout(function () {

    listaElem.classList.add("d-none");

    sparisci.classList.remove("d-none");
    sparisci.classList.add("d-flex");



}, 30000);






//click del bottone
formElem.addEventListener("submit", function (event) {

    event.preventDefault();


    for(let i=0; i<allInput.length; i++){

        const currItem = parseInt(allInput[i].value);
        

        if(numeri.includes(currItem) === true){

            counter++;
        }

    }

alert(`hai indovinato ${counter} numeri`);


});
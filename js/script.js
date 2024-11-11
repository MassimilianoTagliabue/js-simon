const numeri = [];
let counter = 0;
const printElem = document.getElementById("lista-numeri")


let mess = "";


for(let i = 0; i<5; i++){

    const random = Math.floor(Math.random() * 10 + 1);

    numeri.push(random);
    console.log(numeri[i]);

    mess += `<li>${numeri[i]}</li>`;
}


printElem.innerHTML = mess;

 setTimeout(function(){

    printElem.innerHTML = "";

//controllo(numeri);

console.log(`hai indovinato ${counter} numeri`);

},2000);



function controllo(numeri){

    for(let i=numeri.length-1; i>=0; i--){

        const numetoUtente = parseInt(prompt("numero"));
       
        if(numeri.includes(numetoUtente) === true) {
   
            counter++;
        }
       }

       return counter;
}
console.log("Exercise #5");

/* For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];




At the end of the exercise, there should be 4 people in the array.
 */

//1.	Write a command that prints out all of the people in the list.
const people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

let copiaPeople = people.slice();

for(let index = 0; index < people.length; index++){
    console.log(index, people[index]);
}

//2.	Write the command to remove "Dani" from the array.
const dani= people.indexOf("Dani");
if (dani!== -1){
    people.splice(dani,1);
}
console.log (`El arreglo sin "Dani" queda: ${people}`);

//3.	Write the command to remove "Juan" from the array.
const juan= people.indexOf("Juan");
if (juan !== -1){
    people.splice(juan,1);
}
console.log(`En el arreglo sin "Juan" queda: ${people}`);

//4.	Write the command to move "Luis" to the front of the array.
let luis = people.indexOf("Luis");
if (luis !== -1) {
    let deletedPerson = people.splice(luis, 1); 
    people.unshift(deletedPerson[0]);
}
console.log(`El arreglo se actualizo de la siguiente manera: ${people}`);

//5.	Write the command to add your name to the end of the array.
people.push("Dulce Kar");
console.log(`Añadimos una persona al final: ${people}`);

//6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
for ( let i = 1; i < people.length; i++) {
    console.log(people[i]);
    if (people [i] === "Maria") break;
    }

//7.	Write the command that gives the indexOf where "Maria" is located.
let maria = copiaPeople.indexOf("Maria");
if (maria !== -1) {
    copiaPeople.splice(maria,1)
}
console.log(`El arreglo sin "Maria" queda con cuatro personas: ${copiaPeople}`);
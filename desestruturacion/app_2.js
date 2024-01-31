const { addElement, addElementToArray } = require("./app");

let element= addElement("pedro", "feresin");
let miArray=[];

addElementToArray(miArray, element);

console.log(miArray);

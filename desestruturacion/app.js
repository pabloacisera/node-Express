let newArray = [];
let newElement;

// 1. La primera función crea un objeto
function addElement(name, lastname) {
    newElement = {
        name: name,
        lastname: lastname
    };
    console.log(newElement);
    return newElement;
}

// Llamamos a la primera función
addElement();

// 2. La segunda función crea un array y luego le incorpora el objeto creado anteriormente
function addElementToArray(array, element) {
    array.push(element);
    console.log(array);
    return array;
}

// Llamamos a la segunda función, pasando el array y el elemento creado por la primera función
let resultArray = addElementToArray(newArray, newElement);

module.exports={
    addElementToArray: addElementToArray,
    addElement: addElement,
};

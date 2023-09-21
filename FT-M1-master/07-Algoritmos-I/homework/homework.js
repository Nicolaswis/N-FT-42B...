'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factores = [];
  let divisor = 1; // Agregamos el factor 1 manualmente

  while (num > 1) {
    if (num % divisor === 0) {
      factores.push(divisor);
      num = num / divisor; // Corregimos esta línea
    } else {
      divisor++;
    }
  }

  return factores;
}
const factoresDe180 = factorear(180);
console.log(factoresDe180); 


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

let aux = null;

for (let i = 0; i < array.length; i++) {

  for (let j = 0; j < array.length; j++) {
  
    if (array[j] > array [ j + 1]) {

      aux =array[j]; // aux = 1
      array[j] = array[j + 1];  //3  // en esta accion cambia de lugar con los numeros del array
       array[j + 1] =  aux;   //

    }
  }
}
return (array);
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
 const n = array.length;

 for (let i = 1; i < n; i++) {
  // Guarda el elemento actual para su posterior inserción
  const currentElement = array[i];
  let j = i - 1;  // Inicializa un índice para recorrer la parte ordenada del array

  // Comienza a comparar el elemento actual con los elementos en la parte ordenada

  while (j >= 0 && array[j] > currentElement) {
     // Si el elemento en la posición j es mayor que el elemento actual,
      // mueve el elemento en la posición j una posición a la derecha
    
    array[j + 1] = array[j];
    j--;
  }
      // Inserta el elemento actual en la posición correcta
  array[j + 1] = currentElement;
 }
 return array;
 // Devuelve el array ordenado
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
const n = array.length;

for (let i = 0; i < n - 1; i++) {
   // Encuentra el índice del elemento más pequeño en la parte desordenada
   let minIndex = i;

   for (let j = i +1; j < n; j++) {
      
    if ( array[j] < array[minIndex]) {
      minIndex = j
    }
   }
    // Intercambia el elemento más pequeño con el primer elemento de la parte desordenada
    if (minIndex !== i) {
      const temp =  array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;

}
}
return array; // Devuelve el array ordenado
};


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

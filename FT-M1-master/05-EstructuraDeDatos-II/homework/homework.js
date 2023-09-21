'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback.
   En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  function LinkedList() {
    this.head = null
  }
  
  function Node(value) {
    this.value = value
    this.next = null
  }
  
  LinkedList.prototype.add = function(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode; // si lo pongo al reves se sobreescribe
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  };
  
  LinkedList.prototype.remove = function() {
    if (!this.head) {
      return null;
    } else if (!this.head.next) {
      const value = this.head.value;
      this.head = null;
      return value;
    } else {
      let current = this.head;
      let previous = null;
      while (current.next) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
      return current.value;
    }
  };
  
    LinkedList.prototype.search = function(elemento){
      let nodoActual = this.head;
      while(nodoActual !== null){
        if(nodoActual.value === elemento){
          return nodoActual.value;
        };
        if(typeof elemento === 'function' && elemento(nodoActual.value)){
          return nodoActual.value;
        };
        nodoActual = nodoActual.next;
      };
      return null; // retorna null si no lo encuentra
    };
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
this.buckets = []
this.numBuckets = []
}
 HashTable.prototype.hash = function (key) { // almacena
  let uniCode = 0 //almacena la suma
  for (let i = 0; i < key.length; i++) {
   uniCode += key.charCodeAt(i)   // charCodeAt es un método que se utiliza para obtener el valor Unicode (el valor numérico que representa un carácter en el estándar Unicode)
  }
  return uniCode % this.numBuckets

 }
 HashTable.prototype.set = function (key, value) { // busca y recibe el valor
let i = this.hast(key)

if (typeof key !== 'string') throw new typeofError ('keys must be string')
if (!this.buckets[i]) {

  //evitamos una colision
this.buckets[i] = {}
}

this.buckets[i][key] = value

 }
 HashTable.prototype.get = function (key) { //busca el valor correspondiente
let i = this.hash(key) // la posicion

return this.buckets[i][key]
 }
 HashTable.prototype.hasKey = function (key) { //
let i = this.hast(key) // la posicion
return this.buckets[i].hasOwnProperty(key)
 }

// No modifiquen nada debajo de esta linea
// --------------------------------


module.exports = {
  Node,
  LinkedList,
  HashTable,
};
